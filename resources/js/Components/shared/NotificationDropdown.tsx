import Dropdown from '../Dropdown';

export default function NotificationDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <img src="/images/notification.svg" alt="notification" className='w-full h-full object-cover cursor-pointer' />
      </Dropdown.Trigger>

      <Dropdown.Content>
        <div className='h-32'>
          Hi
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
}
