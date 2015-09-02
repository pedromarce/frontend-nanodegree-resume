var bio = {
  name: 'Pedro Marce',
  role: 'Software Architect',
  contacts: {
    mobile: '012345678',
    email: 'pedromarce@gmail.com',
    github: 'pedromarce@github.com',
    twitter: 'pedromarce',
    location: 'London'
  },
  welcomeMessage: 'Welcome to my CV page',
  skills: ['Software development', 'Architecture', 'Leadership'],
  biopic: 'images/fry.jpg',
  display: function () {
    $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
    for (contact in this.contacts) {
      $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', this.contacts[contact]));
      $('#footerContacts').append(HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', this.contacts[contact]));
    }
    $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
    $('#header').append(HTMLskillsStart);
    for (var numSkill in this.skills) {
      var skill = this.skills[numSkill];
      $('#header').append(HTMLskills.replace('%data%', skill));
    }
  }
};

var education = {
  schools: [{
    name: 'Universitat Politecnica Barcelona',
    location: 'Barcelona',
    degree: 'My degree',
    majors: ['Major 1', 'Major 2'],
    dates: 1994,
    url: 'http://www.upc.cat'
  }, {
    name: 'Harvard University',
    location: 'La Habana',
    degree: 'Mices and mouses',
    majors: ['Major Tom'],
    dates: 1999,
    url: 'http://www.harvard.com'
  }],
  onlineCourses: [{
    title: 'Storm',
    school: 'CourseRA',
    date: 2014,
    url: 'http://www.coursera.com'
  }, {
    title: 'Front End Nanodegree',
    school: 'Udacity',
    date: 2015,
    url: 'http://www.udacity.com'
  }],
  display: function () {
    for (var numSchool in this.schools) {
      var school = this.schools[numSchool];
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));
      $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
      $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
      $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors.join(',')));
    };
    $('#education').append(HTMLonlineClasses);
    for (var numCourse in this.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      var course = this.onlineCourses[numCourse];
      $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', course.title));
      $('.education-entry:last').append(HTMLonlineSchool.replace('%data%', course.school));
      $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.date));
      $('.education-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
    };
  }
};

var work = {
  jobs: [{
    employer: 'Nasa',
    title: 'Monkey to be sent to space',
    location: 'Moon',
    dates: 1967,
    description: 'First monkey to be sent to outer space'
  }, {
    employer: 'Apple',
    title: 'Quality Assurance',
    location: 'In a tree',
    dates: 1978,
    description: 'Eat first apples from the tree and check its quality'
  }],
  display: function () {
    for (var numJob in this.jobs) {
      var job = this.jobs[numJob];
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job.employer));
      $('.work-entry:last').append(HTMLworkTitle.replace('%data%', job.title));
      $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
      $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
      $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
    }
  }
};

var projects = {
  projects: [{
    title: 'First project',
    dates: '1995-1999',
    description: 'This was my first project',
    images: ['images/197x148.gif', 'images/197x148.gif']
  }, {
    title: 'Second project',
    dates: '2000-2005',
    description: 'This was my second project',
    images: ['images/197x148.gif', 'images/197x148.gif']
  }],
  display: function () {
    for (var numProject in this.projects) {
      var project = this.projects[numProject];
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
      $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
      $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
      for (var numImage in project.images) {
        var image = project.images[numImage];
        $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
      }
    }
  }
};

var init = function () {
  bio.display();
  work.display();
  projects.display();
  education.display();
  $('#mapDiv').append(googleMap);
};

init();
