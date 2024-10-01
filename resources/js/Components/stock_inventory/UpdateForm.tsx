import DangerButton from '../DangerButton';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import TextInput from '../TextInput';

export default function UpdateForm() {
  return (
    <form className="w-full flex flex-col items-center gap-10 py-10">
      <div>
        <h1 className="text-3xl font-semibold uppercase">Update</h1>
        <h2 className="text-xl font-medium text-t-light uppercase text-center">
          Slot 1
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center gap-2">
          <InputLabel
            htmlFor="variety_name"
            value="Variety Name:"
            className="w-32 text-nowrap"
          />
          <TextInput type="text" id="variety_name" className="py-1 w-full" />
          <InputError className="mt-2" message={''} />
        </div>
        <div className="w-full flex items-center gap-2">
          <InputLabel
            htmlFor="add_stock"
            value="Add Stock:"
            className="w-32 text-nowrap"
          />
          <TextInput type="text" id="add_stock" className="py-1 w-full" />
          <InputError className="mt-2" message={''} />
        </div>
        <div className="w-full flex items-center gap-6 mt-8">
          <PrimaryButton className="w-full py-3">Confirm</PrimaryButton>
          <DangerButton className="w-full py-3">Cancel</DangerButton>
        </div>
      </div>
    </form>
  );
}
