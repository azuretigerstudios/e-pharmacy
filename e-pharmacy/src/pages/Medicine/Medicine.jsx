import { useState } from 'react';
import MedicineStore from '../../modules/MedicineStore/MedicineStore';
import './Medicine.css';

const Medicine = () => {
  // Arama ve filtreleme durumlarını burada yönetip alt bileşenlere dağıtabiliriz
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="medicine-page">
      <section className="medicine-header">
        <h1>Medicine Store</h1>
        <p>Find the medicines and health products you need.</p>
      </section>

      <div className="medicine-container">
        {/* Filtreleme ve Ürün Listesi Modülü */}
        <MedicineStore searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default Medicine;