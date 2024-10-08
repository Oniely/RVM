import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler, useRef, useState } from 'react';

interface ProfileFormData {
  name: string;
  email: string;
  image: File | null;
}

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = '',
}: {
  mustVerifyEmail: boolean;
  status?: string;
  className?: string;
}) {
  const user = usePage().props.auth.user;
  const [imageSrc, setImageSrc] = useState(null);

  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm<ProfileFormData>({
      name: user.name,
      email: user.email,
      image: null,
    });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData('image', e.target.files ? e.target.files[0] : null);

    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e: any) {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImageSrc(null);
    }
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('profile.update'), {
      forceFormData: true,
      onSuccess: () => {
        console.log('SUCCESS');
        setData('image', null);
        if (formRef.current) {
          formRef.current.reset();
          setImageSrc(null);
        }
      },
    });
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Update your account's profile information and email address.
        </p>
      </header>

      <form
        onSubmit={submit}
        className="mt-6 space-y-6"
        encType="multipart/form-data"
        ref={formRef}
      >
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            className="block w-full mt-1"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            required
            isFocused
            autoComplete="name"
          />

          <InputError className="mt-2" message={errors.name} />
        </div>

        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            className="block w-full mt-1"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
            autoComplete="username"
          />

          <InputError className="mt-2" message={errors.email} />
        </div>

        <div>
          <InputLabel htmlFor="image" className="w-fit">
            <p className="text-gray-700">Profile Photo</p>
            {imageSrc ? (
              <div className="flex gap-3">
                <div className="w-56 h-44 mt-1 rounded-md relative">
                  <img
                    src={imageSrc || ''}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="gap-1 p-5 mt-1 border border-gray-300 rounded-md flexCenter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span>Change Photo</span>
                </div>
              </div>
            ) : (
              <div className="gap-1 p-5 px-20 mt-1 border rounded-md flexCenter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Upload Photo</span>
              </div>
            )}
          </InputLabel>

          <TextInput
            id="image"
            type="file"
            className="hidden mt-1 bg-white"
            onChange={handleImageChange}
            accept="image/*"
          />

          <InputError className="mt-2" message={errors.image} />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className="mt-2 text-sm text-gray-800">
              Your email address is unverified.
              <Link
                href={route('verification.send')}
                method="post"
                as="button"
                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === 'verification-link-sent' && (
              <div className="mt-2 text-sm font-medium text-green-600">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
