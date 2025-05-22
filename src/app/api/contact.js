export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Here, you can integrate with your backend or email service
        // For demonstration, we'll assume success
        console.log('Received contact form submission:', req.body);
        res.status(200).json({ message: 'Message sent successfully' });
      } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ error: 'Failed to send message' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }