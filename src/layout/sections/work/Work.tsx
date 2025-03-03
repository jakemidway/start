import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";

const worksItems= ['sddw', 'sadsaded', 'awdawd w']

export const Work = () => {
    return (
        <div>
            <SectionTitle title={"work"} />
            <Menu menuItems={worksItems}/>
        </div>
    );
};

