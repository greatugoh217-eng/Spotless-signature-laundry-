# Python script for automatic WhatsApp notifications
# Using Twilio API

import os
from twilio.rest import Client
from datetime import datetime

# Twilio Credentials (use environment variables for security)
TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID', 'your_sid_here')
TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN', 'your_token_here')
TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'  # Twilio Sandbox Number

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

def send_booking_notification(customer_phone, customer_name, appointment_date, service_type, booking_id):
    """
    Sends a WhatsApp message to the customer after a successful booking.
    """
    try:
        # Format the message
        message_body = (
            f"Hello {customer_name}! 🧼\n\n"
            f"Your booking with *Spotless Signature Enterprise* is confirmed.\n\n"
            f"📍 *Booking ID:* {booking_id}\n"
            f"🛠 *Service:* {service_type}\n"
            f"📅 *Date/Time:* {appointment_date}\n\n"
            f"We'll see you soon! If you need to reschedule, please reply to this message."
        )

        # Send message
        message = client.messages.create(
            from_=TWILIO_WHATSAPP_NUMBER,
            body=message_body,
            to=f"whatsapp:{customer_phone}"
        )

        print(f"Message sent successfully! Sid: {message.sid}")
        return True
    except Exception as e:
        print(f"Error sending WhatsApp message: {e}")
        return False

# Sample Trigger Example
if __name__ == "__main__":
    # This would normally be called after your database save operation
    sample_booking = {
        "booking_id": "SS-10294",
        "name": "John Doe",
        "phone": "+2348135448902",
        "date": "2026-05-20 10:00 AM",
        "service": "Dry Cleaning"
    }
    
    send_booking_notification(
        sample_booking["phone"],
        sample_booking["name"],
        sample_booking["date"],
        sample_booking["service"],
        sample_booking["booking_id"]
    )
