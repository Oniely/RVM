import { useForm } from '@inertiajs/react';
import DangerButton from '../DangerButton';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import TextInput from '../TextInput';
import { FormEventHandler } from 'react';
import { Transition } from '@headlessui/react';
import { Rice } from '@/types';

interface Props {
  stock: Rice;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmRelease({ stock, onConfirm, onCancel }: Props) {
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      release: false,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    if (data.release) {
      console.log('TRUE');
    }
  };

  return (
    <form
      onSubmit={submit}
      className="w-full flex flex-col items-center gap-10 p-10"
    >
      <div>
        <h1 className="text-3xl font-semibold uppercase">Operation</h1>
        <h2 className="text-xl font-medium text-t-light uppercase text-center">
          Slot
        </h2>
      </div>

      <div>
        <p className="text-accent text-lg text-center font-medium">
          Are you sure you want to dispense the remaining rice?
        </p>
      </div>

      <div className="w-full flex items-center gap-6 mt-8">
        <PrimaryButton
          className="w-full py-3"
          disabled={processing}
          onClick={() => {
            setData('release', true);
            onConfirm();
          }}
        >
          Confirm
        </PrimaryButton>
        <DangerButton type="button" className="w-full py-3" onClick={onCancel}>
          Cancel
        </DangerButton>
      </div>

      <Transition
        show={recentlySuccessful}
        enter="transition ease-in-out"
        enterFrom="opacity-0"
        leave="transition ease-in-out"
        leaveTo="opacity-0"
      >
        <p className="text-sm text-gray-600">Released.</p>
      </Transition>
    </form>
  );
}
