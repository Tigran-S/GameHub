import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Դուք արդեն մուտքագրել եք այդ տառը</p>
    </div>
  )
}

export default Notification