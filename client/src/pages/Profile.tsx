import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../api/userApi';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getUserProfile();
      setProfile(userProfile);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p>{profile.location}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;