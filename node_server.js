const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employee_db', { useNewUrlParser: true });

const Employee = mongoose.model('Employee', {
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true }
});

app.post('/employees', (req, res) => {
  const employee = new Employee(req.body);
  employee.save()
    .then(employee => {
      res.json(employee);
    })
    .catch(error => {
      res.status(400).json({ error });
    });
});
