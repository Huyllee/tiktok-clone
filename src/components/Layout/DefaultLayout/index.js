import Sidebar from './Sidebar';
import Header from '../components/Header';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <Sidebar />
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
