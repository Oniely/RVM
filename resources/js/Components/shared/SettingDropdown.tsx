import Dropdown from '../Dropdown';

export default function SettingDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <img src="/images/setting.svg" alt="setting" className='w-full h-full object-cover cursor-pointer' />
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
        <Dropdown.Link href={route('logout')} method="post" as="button">
          Log Out
        </Dropdown.Link>
      </Dropdown.Content>
    </Dropdown>
  );
}
