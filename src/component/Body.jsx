
import { BarChart } from '@mui/x-charts/BarChart';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import Image from '../assets/profile.jpg';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import Rating from '@mui/material/Rating';
import Image2 from '../assets/img-2.jpg';
import "../App.css";

const Body = () => {
  return (
    <>
      <h2 className="ms-5 p-4 text-white">Dashboard</h2>
      <div className="container ">
        <div className="row">
          {/* ----------------------------------------- */}
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-3">
                <div className='orders p-3'>
                  < ShoppingBasketIcon className='icon' />
                  <p style={{ fontSize: '14px' }}>Total Orders</p>
                  <div className="row">
                    <div className="col-6">
                      <p>75</p>
                    </div>
                    <div className="col-6">
                      <p style={{ color: 'green' }}>3%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-3">
                <div className='orders p-3'>
                  <LocalMallOutlinedIcon className='icon2' />
                  <p style={{ fontSize: '14px' }}>Total Delivered</p>
                  <div className="row">
                    <div className="col-6">
                      <p>75</p>
                    </div>
                    <div className="col-6">
                      <p style={{ color: 'red' }}>3%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-3">
                <div className='orders p-3'>
                  <LocalMallOutlinedIcon className='icon3' />
                  <p style={{ fontSize: '14px' }}>Total Cancelled</p>
                  <div className="row">
                    <div className="col-6">
                      <p>75</p>
                    </div>
                    <div className="col-6">
                      <p style={{ color: 'green' }}>3%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-3">
                <div className='orders p-3'>
                  <WorkspacePremiumOutlinedIcon className='icon4' />
                  <p style={{ fontSize: '14px' }}>Total Revenue</p>
                  <div className="row">
                    <div className="col-6">
                      <p>75</p>
                    </div>
                    <div className="col-6">
                      <p style={{ color: 'red' }}>3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='p-2 back'>
                <h3 className='text-white'>Activity</h3>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: ['5', '9', '11', '13'] }]}
                  series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }, { data: [2, 5, 6] }]}
                  width={500}
                  height={200}
                />
              </div>
            </div>
            <div className='mt-2'>
              <div className='bg-dark p-3'>
                <h3 className='text-white'>Recent Orders</h3>
                <table className="table table-dark table-back ">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={Image} />  Wade Warren</td>
                      <td>15478256</td>
                      <td>$124.00</td>
                      <td><button className='btns'>Delivered</button></td>
                    </tr>
                    <tr>
                      <td><img src={Image2} /> Jane Cooper</td>
                      <td>48965786</td>
                      <td>$365.02</td>
                      <td><button className='btns'>Delivered</button></td>
                    </tr>
                    <tr>
                      <td><img src={Image} /> Guy Hawkins</td>
                      <td>78958215</td>
                      <td>$45.88</td>
                      <td><button className='btns-2'>Cancelled</button></td>
                    </tr>
                    <tr>
                      <td><img src={Image2} /> Kristin Watson</td>
                      <td>20965732</td>
                      <td>$65.00</td>
                      <td><button className='btns-2'>Pending</button></td>
                    </tr>
                    <tr>
                      <td><img src={Image} /> Cody Fisher</td>
                      <td>95715620</td>
                      <td>$545.00</td>
                      <td><button className='btns'>Delivered</button></td>
                    </tr>
                    <tr>
                      <td><img src={Image2} /> Savannah Nguyen</td>
                      <td>78514568</td>
                      <td>$128.20</td>
                      <td><button className='btns'>Delivered</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* ------------------------------ */}
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="row  table-back text-white mt-1">
              <div className="col-lg-6 col-md-12 col-12 bg-dark p-2 ">
                <p>Net Profit</p>
                <h3>$ 6759.25</h3>
                <p style={{ color: 'green', fontWeight: 'bold' }}>3%</p>
              </div>
              <div className="col-lg-6 col-md-12 col-12 bg-dark ">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 5 }}>
                  <Gauge width={100} height={100} value={70} />
                </Stack>
                <p>The volume here has been rounded</p>
              </div>

              <div className='mt-5 mb-3 '>
                <div className="row bg-dark p-2">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <p><SettingsIcon className='Licon' /></p>
                    <p><StorefrontIcon className='Licon2' /></p>
                    <p><MenuBookIcon className='Licon3' /></p>

                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <p>Goals</p>
                    <p>Goals</p>
                    <p>Goals</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <p><ArrowForwardIosIcon /></p>
                    <p><ArrowForwardIosIcon /></p>
                    <p><ArrowForwardIosIcon /></p>
                  </div>
                </div>
              </div>
              <div className='bg-dark text-white p-3 mt-3'>
                <h3>Customer Feedback</h3>
                <p><img src={Image2} className='img' /> Jenny Wilson</p>
                <Rating name="size-large" defaultValue={4} size="large" />
                <p style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo vel ab saepe dolore iure aut praesentium nobis! Blanditiis dolores fugit quibusdam</p>

                <p><img src={Image} className='img' /> Dianne Russell</p>
                <Rating name="size-large" defaultValue={5} size="large" />
                <p style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum explicabo vel ab saepe dolore </p>

                <p><img src={Image2} className='img' /> Devon Lane</p>
                <Rating name="size-large" defaultValue={4} size="large" />
                <p style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum </p>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body;

