# EmailJS Setup Instructions

The contact form is now configured to use EmailJS for sending emails. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Set Up Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. Copy your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Set the **To Email** field to: `kylenel46@gmail.com`
5. Copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

Create a `.env` file in the root of your project with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

Once configured, test the contact form by:
1. Filling out the form with your details
2. Submitting it
3. Checking your email inbox (kylenel46@gmail.com) for the message

The form includes:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Automatic form reset on success

