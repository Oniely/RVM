import DangerButton from '../DangerButton';
import PrimaryButton from '../PrimaryButton';
import { FormEventHandler } from 'react';
import { Rice } from '@/types';
import { useForm } from '@inertiajs/react';

interface Props {
  stock: Rice;
  onCancel: () => void;
}

export default function ConfirmRelease({ stock, onCancel }: Props) {
  const { patch, processing } = useForm();

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('stock.release', stock.id), {
      onSuccess: () => {
        onCancel();
      },
      onError: (error) => {
        console.log(error);
      },
    });
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
        <PrimaryButton className="w-full py-3" disabled={processing}>
          Confirm
        </PrimaryButton>
        <DangerButton
          type="button"
          className="w-full py-3"
          disabled={processing}
          onClick={onCancel}
        >
          Cancel
        </DangerButton>
      </div>
    </form>
  );
}
