import Link from 'next/link'
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