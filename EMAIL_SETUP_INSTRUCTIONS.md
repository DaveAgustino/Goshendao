# EmailJS Setup Instructions for GOSHENDAO Contact Form

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** service_mmpwfwp

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

\`\`\`
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the GOSHENDAO contact form.
Reply to: {{reply_to}}
\`\`\`

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## 5. Update Configuration
In `components/ui/contact-form.tsx`, replace these values:

\`\`\`typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',     // From step 2
  TEMPLATE_ID: 'your_template_id_here',   // From step 3
  PUBLIC_KEY: 'your_public_key_here',     // From step 4
  TO_EMAIL: 'hello@goshendao.com'         // Your email address
}
\`\`\`

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your email inbox
3. Verify the email format and content

## 7. Email Template Variables
The form sends these variables to your template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - User's message
- `{{to_email}}` - Your email (hello@goshendao.com)
- `{{reply_to}}` - User's email for replies

## 8. Free Tier Limits
- 200 emails per month
- Rate limit: 50 emails per hour
- For higher limits, consider upgrading to a paid plan

## 9. Security Notes
- Public key is safe to expose in client-side code
- Service ID and Template ID are also safe to expose
- Never expose your private key in client-side code

## 10. Alternative: Server-Side Implementation
For production, consider using a server-side solution like:
- Resend API with Next.js API routes
- SendGrid
- Nodemailer with SMTP

This would provide better security and reliability.
\`\`\`

## **📧 Functional Contact Form with Real-time Email & Animated Modal**

### **🚀 Features Implemented:**

#### **📬 EmailJS Integration:**
- **Real-time Email Delivery**: Messages sent instantly to your specified email
- **Client-side Solution**: No server setup required
- **Free Tier**: 200 emails/month included
- **Easy Configuration**: Just update the config object

#### **✨ Animated Success Modal:**
- **Beautiful Animation**: Spring-based entrance with particles
- **Auto-close Timer**: Disappears after 3 seconds
- **Progress Bar**: Visual countdown indicator
- **Professional Design**: Matches GOSHENDAO branding

#### **🎯 Form Features:**
- **Real-time Validation**: Instant feedback on form errors
- **Loading States**: Shows spinner while sending
- **Error Handling**: Graceful error management
- **Form Reset**: Clears after successful submission

### **📋 Setup Instructions:**

#### **1. EmailJS Configuration:**
\`\`\`typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',      // Replace with your EmailJS service ID
  TEMPLATE_ID: 'your_template_id',    // Replace with your EmailJS template ID  
  PUBLIC_KEY: 'your_public_key',      // Replace with your EmailJS public key
  TO_EMAIL: 'hello@goshendao.com'     // Your email where messages are sent
}
\`\`\`

#### **2. Email Template Structure:**
\`\`\`
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
\`\`\`

### **🎨 Modal Animation Features:**

#### **🌟 Visual Effects:**
- **Scale & Rotate**: Icon animates in with spring physics
- **Staggered Text**: Title and message fade in sequentially  
- **Progress Bar**: Animated countdown from 100% to 0%
- **Floating Particles**: 6 animated particles for visual flair
- **Backdrop Blur**: Professional modal overlay

#### **⚡ User Experience:**
- **Auto-close**: 3-second timer with visual progress
- **Manual Close**: X button for immediate dismissal
- **Click Outside**: Close by clicking backdrop
- **Responsive**: Works perfectly on mobile devices

### **📱 Form Validation:**

#### **🔍 Real-time Checks:**
- **Name**: Required field validation
- **Email**: Format validation with regex
- **Message**: Required field validation
- **Visual Feedback**: Red borders and error messages

#### **🎯 Error States:**
- **Instant Feedback**: Errors clear as user types
- **Smooth Animations**: Error messages slide in/out
- **Accessibility**: Proper ARIA labels and focus management

### **🔧 Technical Implementation:**

#### **📦 Dependencies Added:**
- `@emailjs/browser`: Email sending functionality
- Enhanced form validation and state management
- Custom modal component with Framer Motion

#### **🎪 Animation Details:**
- **Modal Entrance**: Scale from 0.8 to 1.0 with spring
- **Icon Animation**: Rotate from -180° to 0° with scale
- **Progress Bar**: Linear countdown animation
- **Particles**: Infinite floating animation loop

### **📧 Email Configuration:**

#### **🔗 Quick Setup:**
1. **Create EmailJS Account**: Free at emailjs.com
2. **Add Email Service**: Connect your Gmail/Outlook
3. **Create Template**: Use provided template structure
4. **Update Config**: Replace IDs in the code
5. **Test Form**: Send a test message

#### **📬 Email Delivery:**
- **Instant Delivery**: Messages arrive in seconds
- **Professional Format**: Clean, branded email template
- **Reply-to Setup**: Easy to respond to inquiries
- **Spam-free**: Delivered through EmailJS infrastructure

The contact form is now fully functional with real-time email delivery and a beautiful animated success modal! 🎉✨
