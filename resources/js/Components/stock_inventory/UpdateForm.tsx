import { useForm, usePage } from '@inertiajs/react';
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
  onCancel: () => void;
}

export default function UpdateForm({ stock, onCancel }: Props) {
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      variety: stock.variety || '',
      add_stock: 0,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('stock.update', stock.id), {
      onSuccess: () => {
        onCancel();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      <form
        onSubmit={submit}
        method="POST"
        className="w-full flex flex-col items-center gap-10 p-10"
      >
        <div>
          <h1 className="text-3xl font-semibold uppercase">Update</h1>
          <h2 className="text-xl font-medium text-t-light uppercase text-center">
            Slot
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="w-full flex items-center gap-2">
              <InputLabel
                htmlFor="variety"
                value="Variety Name:"
                className="w-32 text-nowrap"
              />
              <TextInput
                type="text"
                id="variety"
                className="py-1 w-full"
                value={data.variety}
                onChange={(e) => setData('variety', e.target.value)}
                isFocused
              />
            </div>
            <InputError
              className="mt-2 w-full text-right"
              message={errors.variety}
            />
          </div>
          <div>
            <div className="w-full flex items-center gap-2">
              <InputLabel
                htmlFor="add_stock"
                value="Add Stock:"
                className="w-32 text-nowrap"
              />
              <TextInput
                type="number"
                id="add_stock"
                className="py-1 w-full"
                value={data.add_stock}
                onChange={(e) =>
                  !isNaN(e.target.valueAsNumber)
                    ? setData('add_stock', e.target.valueAsNumber)
                    : ''
                }
              />
            </div>
            <InputError
              className="mt-2 w-full text-right"
              message={errors.add_stock}
            />
          </div>
          <div className="w-full flex items-center gap-6 mt-6">
            <PrimaryButton className="w-full py-3" disabled={processing}>
              Confirm
            </PrimaryButton>
            <DangerButton
              type="button"
              className="w-full py-3"
              onClick={onCancel}
              disabled={processing}
            >
              Cancel
            </DangerButton>
          </div>
        </div>
      </form>
      <Transition
        show={recentlySuccessful}
        enter="transition ease-in-out"
        enterFrom="opacity-0"
        leave="transition ease-in-out"
        leaveTo="opacity-0"
      >
        <p className="text-sm text-gray-600 fixed right-0 bottom-0 bg-green-500">
          Update Successful
        </p>
      </Transition>
    </>
  );
}
