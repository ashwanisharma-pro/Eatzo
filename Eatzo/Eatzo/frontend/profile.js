import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/profile.css";
import "../css/responsive.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    profileName: "",
    profileEmail: "",
    profilePhone: "",
    profileCity: "",
    profileAddress: "",
  });

  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.id]: e.target.value,
    });
  };

  // Save profile
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile updated successfully ✅");
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />

      <main className="container section-gap">
        <div className="profile-page-header">
          <h1>My Profile</h1>
          <p>Manage your personal details and delivery information</p>
        </div>

        <div className="profile-layout">
          {/* Sidebar */}
          <div className="profile-sidebar card">
            <div className="profile-avatar">
              <div className="avatar-circle">
                {profile.profileName
                  ? profile.profileName.charAt(0).toUpperCase()
                  : "U"}
              </div>
              <h3>{profile.profileName || "User Name"}</h3>
              <p>{profile.profileEmail || "email@example.com"}</p>
            </div>

            <div className="profile-menu">
              <a href="#profileInfoSection" className="active">
                Profile Info
              </a>
              <a href="#savedAddressSection">Saved Address</a>
              <a href="/orders">My Orders</a>
              <button onClick={handleLogout} className="btn small-btn">
                Logout
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="profile-content">
            {/* Profile Info */}
            <div className="profile-card card" id="profileInfoSection">
              <h2>Personal Information</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      id="profileName"
                      value={profile.profileName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      id="profileEmail"
                      value={profile.profileEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      id="profilePhone"
                      value={profile.profilePhone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      id="profileCity"
                      value={profile.profileCity}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    id="profileAddress"
                    rows="4"
                    value={profile.profileAddress}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Save Changes
                </button>
              </form>
            </div>

            {/* Saved Address */}
            <div className="profile-card card" id="savedAddressSection">
              <h2>Saved Address</h2>

              <div className="saved-address-box">
                {profile.profileAddress ? (
                  <p>
                    {profile.profileAddress}, {profile.profileCity}
                  </p>
                ) : (
                  <p>No address saved yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;