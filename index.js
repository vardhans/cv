angular
  .module('cvVardhan',[])
  .controller('CvController',CvController)

function CvController() {
  var vm = this;
  vm.cv = {
    name : 'Vardhan Surapaneni',
    description : 'Full Stack Developer',
    pic: 'https://en.gravatar.com/userimage/58557075/9b5c0738bb30506ae30029d97a10be10?size=200',
    summary:'Passionate web developer working on applications that are innovative and technically challenging. Over 7 years of development experience, with proven background successfully managing all facets of site development, from initial design and architecture to site deployment and client management. I am a quick learner and looking forward to working with most advanced web technologies.',
    contact: {
      name: 'Vardhan Surapaneni',
      email: 'vardhan.surapaneni@gmail.com',
      mobile:'+61 426700332',
      linkedin: {
        link: 'https://au.linkedin.com/in/sankruthya-vardhan-surapaneni',
        desc:'au.linkedin.com/in/vardhan'
      },
      github:{
        link: 'https://github.com/vardhans',
        desc:'github.com/vardhans'
      },
      twitter:{
        link:'https://twitter.com/vardhan_s',
        desc:'@vardhan_s'
      },
      resume:{
        link: 'https://drive.google.com/open?id=0B9ybOvX4i0tZeEhDeW85RDdoY2M',
        desc: 'CV'
      }
    },
    languages:[
      {name: 'English',proficiency:'Professional'},
      {name: 'Telugu',proficiency:'Native'}
    ],
    otherSkills:[
      {
        groupName: 'Technologies/ Languages',
        list:['HTML5','Jade','SQL','Coffee Script','Nodejs','Mongodb','Java Script','ES6','Type Script','Oracle','Asp.Net MVC','Asp.Net WebApi','saml 2.0']
      },
      {
        groupName: 'Frameworks/ Plugins',
        list:['JQuery','Angularjs','Angularjs2','React','Redux', 'Flux', 'Meteorjs','Cordova','Google Polymers','Mongoose','Jasmine','Mocha','Angular Material','Google Apis','Facebook Apis','webpack','Gulp','Grunt']
      },
      {
        groupName: 'Scripting/ Styling',
        list:['ES6','CSS3','less','stylus','sass']
      },
      {
        groupName: 'IDE/Tools',
        list: ['Eclipse','Webstrom', 'Atom','Sublime','Visual Studio','Visual Code', 'Visual Studio']
      },
      {
        groupName: 'Servers/ SCM tools',
        list: ['Git','Bitbucket','Teamcity','Stach','TFS']
      }
    ],
    interests:[ 'Coding','Reading','Running' ],
    education:[
      {
        degree: 'Bachelor of Technology  in Computer Science',
        uni:'Nagarjuna University, India',
        time:'2005 - 2009'
      }
    ],
    skills: [
      { name: 'Angularjs', proficiency: '95%' },
      { name: 'Angularjs2', proficiency: '72%' },
      { name: 'React & Redux/Flux', proficiency: '80%' },
      { name: 'Google Polymers', proficiency: '55%' },
      { name: 'HTML5 & CSS', proficiency: '98%' },
      { name: 'Nodejs', proficiency: '95%' },
      { name: 'Meteor js', proficiency: '88%' },
      { name: 'Mongodb', proficiency: '88%' },
      { name: 'JQuery', proficiency: '98%' },
      { name: 'ASP.Net MVC', proficiency: '80%' },
      { name: 'ASP.Net WebApi2', proficiency: '80%' },
      { name: '.Net Core', proficiency: '40%' },
      { name: 'Oracle', proficiency: '85%' }
      
    ],
    experiences: [
      {
        role: 'Senior Software Engineer',
        time:'2016 - Present',
        company: 'Commonwealth Bank, Sydney',
        details: [
          'As a Senior Software Engineer, I am responsible for developing and maintaining different applications used in CommBank. Being an agile team, participated in sprint planning backlog grooming activities. Conducted training session to new team members.',
          'Lead the scrum team with deliverables',
          'Implemented automated cron jobs to process monthly instalments and generate various reports for management and academic teams.'
        ]
      },
      {
        role: 'Lead Developer',
        time:'2015 - 2016',
        company: 'Matrix Education, Sydney',
        details: [
          'As a lead developer, I am responsible for developing and maintaining different applications used in Matrix. Being an agile team, participated in sprint planning backlog grooming activities. Conducted training session to new team members.',
          'Student Management System is used to manage student enrolment Information and teachers payrolls. Developed new applications to automate the manual process of enquiry and enrollments.',
          'Implemented automated cron jobs to process monthly instalments and generate various reports for management and academic teams.'
        ]
      },
      {
        role: 'Senior Software Engineer',
        time:'2012 - 2015',
        company: 'Commonwealth Bank, Sydney',
        details: [
          'Lead development teams by building and design applications in the new technology stack. Followed agile development practices.Guided new team members to upskill to new technology stack.',
          'Developed various design and development patterns and proposed solutions to address the business requirements, Implemented unit and automated testing scripts and created build pipeline for continues integration of application with test and production environments.'
        ]

      },
      {
        role: 'Software Engineer',
        time:'2009 - 2012',
        company: 'HCL Technologies, India',
        details: [
          'Participated in requirment analysis and development and support of existing applicaitons. Provided training to new team members.'
        ]

      }
    ],
    projects: [
      {
        name: 'Payments',
        description: 'Windows form application that enables payments between different accounts of a customer.'
      },
      {
        name: 'International Money Transfer',
        description: 'A web application that enables netbank users to transfer money overseas. Also Implemented campaigns and discounted rates for targeted customers.'
      },
      {
        name: 'Simplelife Insurance',
        description: 'Web application to apply for a new life insurance application. It enables to customise your insurance cover.'
      },
      {
        name: 'Customer Conversations',
        description: 'Online  tool to capture customer details alongside conversing with them.'
      },
      {
        name: 'Finantial Health check',
        description: 'This application performs Financial Health Check for the customer by capturing their financial details and anticipated future goals. '
      },
      {
        name: 'Business Review Tool',
        description: 'Hybrid application  to review the financial status of business customers. And suggest various banking products to active their business goals.'
      },
      {
        name: 'Student Information System',
        description: 'Application to manage student course enrollments, schedule classes for academic staff and maintain their payroll. Process payments for tuition fees. Integrates with Canvas application to retrieve and display student progress report.'
      },
      {
        name: 'Workshop Management',
        description: 'Application to schedule one-on-one workshops with the Academic team.'
      },
      {
        name: 'Accdemic Survey',
        description: 'Application to capture student class preferences for following Academic year.'
      },
      {
        name: 'Online Enquiry',
        description: 'Web application to capture Online enquiry from customers in most effective way possible.'
      },
      {
        name: 'Enquiry Management',
        description: 'Application to manage customer enquiries and generate insights and suggestions based on there queries.'
      },
      {
        name: 'Concierge Portal',
        description: 'Application to generated different reports on customer servicesed in a branch/region.'
      },
      {
        name: 'Calendaring Application',
        description: 'A Calendaring application that performs 2-way sync with Lenders outlook calendar and enables the bookers to searche their availability for Home loan appointments.'
      }
    ]
  }
}  