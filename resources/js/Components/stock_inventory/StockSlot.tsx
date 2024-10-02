import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import Modal from '../Modal';
import UpdateForm from './UpdateForm';
import ConfirmRelease from './ConfirmRelease';

interface Props {
  stock: {
    id: number;
    name: string;
    variety: string;
    current_stock: number;
  };
  isAvailable?: boolean;
  onConfirm: () => void;
}

export default function StockSlot({
  stock,
  isAvailable = false,
  onConfirm,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'update' | 'release' | null>(null);

  const handleOpenModal = (type: 'update' | 'release') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <>
      <div className="flex flex-col items-center w-60 gap-6 py-4 px-5 border-2 rounded-xl border-primary">
        <div className="text-center">
          <h3 className="text-xl font-semibold leading-4 uppercase">
            {`Slot ${stock.id}`}
          </h3>
          <span
            className={`text-sm font-medium ${
              isAvailable ? 'text-primary' : 'text-[#ff2b2b]'
            }`}
          >
            {isAvailable ? 'Available' : 'Not available'}
          </span>
        </div>
        <div className="space-y-3">
          <div className="text-center">
            <h4 className="text-lg font-semibold leading-4 text-primary">
              {stock.variety}
            </h4>
            <span className="text-sm text-t-light">Variety</span>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold leading-4 text-primary">
              {stock.current_stock} kg
            </h4>
            <span className="text-sm text-t-light">Current Stocks</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <PrimaryButton
            className="w-full py-3"
            onClick={() => handleOpenModal('update')}
          >
            Update
          </PrimaryButton>
          <SecondaryButton
            className="w-full bg-t-light text-[#ff2b2b] hover:bg-t-light/90 active:bg-t-light py-3"
            onClick={() => handleOpenModal('release')}
          >
            Release
          </SecondaryButton>
        </div>
      </div>

      <Modal show={modalOpen} onClose={handleCloseModal} maxWidth="lg">
        {modalType === 'update' && (
          <UpdateForm onConfirm={onConfirm} onCancel={handleCloseModal} />
        )}

        {modalType === 'release' && (
          <ConfirmRelease onConfirm={onConfirm} onCancel={handleCloseModal} />
        )}
      </Modal>
    </>
  );
}
