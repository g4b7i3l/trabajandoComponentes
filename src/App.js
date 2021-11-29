import ContentWrapper from './components/contentWrapper';
import SideBar from './components/sideBar';

function App() {
  return (
<html lang="es">
<head>
	
	<title>Dashboard DH-Movies - Admin</title>

	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>

	<link href="assets/css/app.css" rel="stylesheet"/>
</head>

<body>
<div id="wrapper">
  <SideBar/>
  <ContentWrapper/>
</div>

</body>

</html>
  );
}

export default App;
