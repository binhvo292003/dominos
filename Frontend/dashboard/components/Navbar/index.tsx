import { BiSearch } from 'react-icons/bi';
import { MdNotifications } from "react-icons/md";

import UserItem from './UserItem';
import LanguageSelect from './LanguageSelect';

const defaultIconSize = '1.875rem';

const Index = () => {
    return (
        <>
            <div className="bg-blue-300 p-4 flex flex-row justify-between">
                <div className="bg-gray-300 flex flex-row items-center rounded-lg">
                    <input
                        type="text"
                        className="rounded-lg p-2 font-bold bg-transparent focus:outline-none"
                        placeholder="Search"
                    />
                    <BiSearch size={defaultIconSize} className="ml-2" />
                </div>

                <div className="flex flex-row items-center gap-8">
                    <MdNotifications size={defaultIconSize} className="flex items-center" />
                    <LanguageSelect/>
                    <UserItem />
                </div>
            </div>
        </>
    );
};

export default Index;
