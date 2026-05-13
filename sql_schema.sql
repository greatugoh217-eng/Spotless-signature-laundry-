-- SQL schema for Spotless Signature Booking System
-- Database: PostgreSQL

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    appointment_date TIMESTAMP NOT NULL,
    service_type VARCHAR(100),
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Pending'
);

-- Index for faster lookups on date
CREATE INDEX idx_appointment_date ON bookings(appointment_date);
