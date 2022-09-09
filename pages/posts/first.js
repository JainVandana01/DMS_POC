import Link from 'next/link'
import SideBar from '../../components/Sidebar/Sidebar';
import Orders from '../../components/Orders/Orders';
import sidebar_menu from '../../constants/sidebar-menu';
import Table from '../../components/Table';

export default function FirstPost() {
   return (
      <>
         {/* <SideBar menu={sidebar_menu} /> */}
         <Table/>
         <h2>
            <Link href="/">
               <a>Home</a>
            </Link>
         </h2>
      </>	  
   )
}