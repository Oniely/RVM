import { useForm } from '@inertiajs/react';
import DangerButton from '../DangerButton';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import TextInput from '../TextInput';
import { FormEventHandler } from 'react';
import { Transition } from '@headlessui/react';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function UpdateForm({ onConfirm, onCancel }: Props) {
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      variety_name: '',
      add_stock: 0,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    // patch(route('stock.update'));
  };

  return (
    <form
      onSubmit={submit}
      className="w-full flex flex-col items-center gap-10 p-10"
    >
      <div>
        <h1 className="text-3xl font-semibold uppercase">Update</h1>
        <h2 className="text-xl font-medium text-t-light uppercase text-center">
          Slot
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center gap-2">
          <InputLabel
            htmlFor="variety_name"
            value="Variety Name:"
            className="w-32 text-nowrap"
          />
          <TextInput
            type="text"
            id="variety_name"
            className="py-1 w-full"
            value={data.variety_name}
            onChange={(e) => setData('variety_name', e.target.value)}
            required
          />
          <InputError className="mt-2" message={errors.variety_name} />
        </div>
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
            onChange={(e) => setData('add_stock', e.target.valueAsNumber)}
            required
          />
          <InputError className="mt-2" message={errors.add_stock} />
        </div>
        <div className="w-full flex items-center gap-6 mt-8">
          <PrimaryButton
            className="w-full py-3"
            disabled={processing}
            onClick={onConfirm}
          >
            Confirm
          </PrimaryButton>
          <DangerButton
            type="button"
            className="w-full py-3"
            onClick={onCancel}
          >
            Cancel
          </DangerButton>
        </div>
      </div>

      <Transition
        show={recentlySuccessful}
        enter="transition ease-in-out"
        enterFrom="opacity-0"
        leave="transition ease-in-out"
        leaveTo="opacity-0"
      >
        <p className="text-sm text-gray-600">Updated.</p>
      </Transition>
    </form>
  );
}
