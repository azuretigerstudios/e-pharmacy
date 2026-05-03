import ProductCard from '../../components/ProductCard/ProductCard';

const MedicineStore = ({ searchTerm, setSearchTerm }) => {
  const products = [
    { id: 1, name: 'Aspirin', price: '10.99', category: 'Painkiller' },
    { id: 2, name: 'Vitamin C', price: '15.50', category: 'Supplements' },
    { id: 3, name: 'Antibiotic Cream', price: '12.00', category: 'Skin Care' },
  ];

  return (
    <div className="medicine-store-wrapper">
      <aside className="filters-sidebar">
        <h3>Filters</h3>
        <input 
          type="text" 
          placeholder="Search medicine..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </aside>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MedicineStore;