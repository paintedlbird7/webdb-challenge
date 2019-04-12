const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.sqlite3',
  },
  useNullAsDefault: true, // needed for sqlite
};

const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());







  //POST for adding projects. *working*
server.post('/api/projects', async (req, res) => {
    try {
      const [id] = await db('projects').insert(req.body);
  
      const project = await db('projects')
        .where({ id })
        .first();
  
      res.status(201).json(project);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });


  //POST for adding actions. *working*
  server.post('/api/actions', async (req, res) => {
    try {
      const [id] = await db('actions').insert(req.body);
  
      const action = await db('actions')
        .where({ id })
        .first();
  
      res.status(201).json(action);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });

  


//   router.get('/api/students/:id', (req, res) => {
//     const { id } = req.params;
//      db('projects')
//         .where({ id: id })
//         .then(project => {
//           db('cohorts).where({ studentId: id }).then(cohort=> {
//                 return res.status(200).json({ ...project, cohort: cohort });
//           });
//         })
//         .catch(() => {
//             return res
//                 .status(500)
//                 .json({ Error: "Student Info Error" })
//         });
//   });



  server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
     db('projects')
        .where({ id: id })
        .then((projects) => {
          db('actions')
            .where({ project_id: id })
            .then((actions) => {
            res.status(200).json({ 
                // (projects)
                ...project, cohort: cohort 
            });
          })
        });
    
        .catch((err) =>  res.status(500).json({ message: "Student Info Error", err }))
    
    });
  });



 //projects = cohorts
  //actions = students

//   // GET for retrieving a project by its id that returns an object with the following structure:
//   server.get('/:id/actions', (req, res) => {
//     const id = req.params.id;
//     db('projects')
//       .join('actions', 'actions.project_id', 'projects.id')
//       .select('actions.id', 'actions.name')
//       .where('projects.id', id)
//       .first()
//       .then(stu => {
//         if (stu) {
//           res.status(200).json(stu);
//         } else {
//           res.status(404).json({ message: 'No students were found, please try again' });
//         }
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
//  });





 // GET list all projects *extra & working*
server.get('/api/projects', async (req, res) => {
    // get the cohorts from the database
    try {
      const projects = await db('projects'); // all the records from the table
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// GET list all actions *extra & working*
server.get('/api/actions', async (req, res) => {
    // get the cohorts from the database
    try {
      const actions = await db('actions'); // all the records from the table
      res.status(200).json(actions);
    } catch (error) {
      res.status(500).json(error);
    }
  });



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);