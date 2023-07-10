import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function ModalAlert() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowAlert}>
        เปิดแจ้งเตือน
      </Button>

      <Alert variant="danger" show={showAlert} onClose={handleCloseAlert} dismissible>
        <Alert.Heading>ข้อความแจ้งเตือน</Alert.Heading>
        <p>
          นี่คือข้อความแจ้งเตือนที่แสดงผลใน Modal Alert
        </p>
      </Alert>
    </div>
  );
}

export default ModalAlert;
