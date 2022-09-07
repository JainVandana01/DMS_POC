import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Grid from '../components/Grid/Grid';

const Home: NextPage = () => {
  const bookingItems= [[
    {label: 'Pre-Booking', id: 1}, 
    {label: 'Order-Booking', id:2}, 
    {label: 'Payment Receipts', id:3}, 
    {label: 'Booking Follow-up', id:4},
    {label: 'Contract Managment', id:5},
    {label: 'Statement of Account', id:6},
    {label: 'Allotment', id:7},
    {label: 'PDI', id:8}
    ],
    [
    {label: 'Order-Amendment', id: 1}, 
    {label: 'Order-Cancellation', id:2}, 
    {label: 'Order-Refund', id:3}, 
    {label: 'Invoice Cancellation', id:4}
    ],
    [
    {label: 'Pre-Invoice', id: 1}, 
    {label: 'Sales-Invoice', id:2}, 
    {label: 'Delivery Receipts', id:3}, 
    {label: 'Gate Pass', id:4}
    ],
    [
    {label: 'GRN', id: 1}, 
    {label: 'Stock Transfer', id:2}, 
    ],
    [
    {label: 'Booking price', id: 1}, 
    {label: 'Vehicle Charges', id:2}, 
    {label: 'Terms & Conditions', id:3}, 
    {label: 'Targets', id:4}, 
    ]
  ];
  const titles= [
    {label: 'Booking Management', id: 1}, 
    {label: 'Exception Management', id:2}, 
    {label: 'Delivery Management', id:3}, 
    {label: 'Stock Management', id:4},
    {label: 'Sales Masters', id:5}
  ];
  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header/>
      <div className="flex h-100 pt-100">
        <h2 className="text-xl font-bold p-4">Sales</h2>
      </div>
      {titles? titles.map((titleName,index)=>
      <Grid className="p-4 max-w-7xl auto" title={titleName.label}>
        {bookingItems? bookingItems[index].map(item=>(
        <Link key={item.id} href={`/${item.id}`}>
          <div className="cursor-pointer border rounded-md hover:opacity-80 duration-300 hover:border-blue-700 hover:bg-blue-50 hover:rounded-md">
          <div className="flex text-sm p-2 items-stretch md:items-center">{item.label}
          </div>
          </div>
          </Link>)
        ): null
        }
        </Grid>
        ):null
        }
    </main>
  )
}

export default Home;
