import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import DonorList from './components/DonorList';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

function App() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [sortByAvailability, setSortByAvailability] = useState(false);
  
  const [requestStatus, setRequestStatus] = useState({});

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
      
        const enhancedDonors = data.map((user, index) => {
          const bloodGroup = BLOOD_GROUPS[index % BLOOD_GROUPS.length];
          const isAvailable = index % 3 !== 0;
          return {
            ...user,
            bloodGroup,
            isAvailable
          };
        });
        
        setDonors(enhancedDonors);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const handleRequest = (donorId) => {
    setRequestStatus(prev => ({ ...prev, [donorId]: true }));
  };

  const filteredDonors = donors.filter(donor => {
    const matchBloodGroup = selectedBloodGroup ? donor.bloodGroup === selectedBloodGroup : true;
    const matchCity = searchCity ? donor.address.city.toLowerCase().includes(searchCity.toLowerCase()) : true;
    return matchBloodGroup && matchCity;
  }).sort((a, b) => {
    if (sortByAvailability) {
      return (a.isAvailable === b.isAvailable) ? 0 : a.isAvailable ? -1 : 1;
    }
    return 0;
  });

  const filteredAvailableCount = filteredDonors.filter(d => d.isAvailable).length;

  return (
    <div className="app-container">
      <Header 
        loading={loading} 
        error={error} 
        filteredAvailableCount={filteredAvailableCount} 
      />

      <Filters 
        bloodGroups={BLOOD_GROUPS}
        selectedBloodGroup={selectedBloodGroup}
        setSelectedBloodGroup={setSelectedBloodGroup}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        sortByAvailability={sortByAvailability}
        setSortByAvailability={setSortByAvailability}
      />

      <DonorList 
        loading={loading}
        error={error}
        donors={filteredDonors}
        requestStatus={requestStatus}
        handleRequest={handleRequest}
      />
    </div>
  );
}

export default App;
