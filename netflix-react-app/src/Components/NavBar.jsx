const NavBar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbarNetflix">
        <div class="container-fluid px-4 px-4 containerRelative">
          
          <a class="navbar-brand" href="indexmain.html"><span><img src="/assets/netflix_logo.png"  class="navbarLogo" alt=""></span></a>
          <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Recently Added</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">My List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="settings.html">Settings</a>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto navbarRightUl">
              <li>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2 collapse" id="collapseExample" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn my-2 my-sm-0 searchWhite" type="submit"><a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-search"></i></a></button>
                </form>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kids</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-bell"></i></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span><img src="/assets/avatar.png" class="navbarAvatar"></span>
                </a>
                <div class="dropdown-menu blackDropdown mainDropDown" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#"><span><img src="assets/kids_icon.png" class="navbarAvatarSmall"></span>Kids</a>
                  <a class="dropdown-item" href="#"><span><img src="assets/avatar.png" class="navbarAvatarSmall"></span>Jhon</a>
                  <a class="dropdown-item" href="#"><span><img src="assets/kids_icon.png" class="navbarAvatarSmall"></span>Granma</a>
                  <a class="dropdown-item" href="#"><span><img src="assets/avatar.png" class="navbarAvatarSmall"></span>Abusive</a>
                  <a class="dropdown-item" href="#">Manage Profiles</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Account</a>
                  <a class="dropdown-item" href="settings.html">Service Center</a>
                  <a class="dropdown-item" href="backoffice.html">Back Office</a>
                  <a class="dropdown-item" href="#">Quit Netflix</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
     );
}
 
export default NavBar;