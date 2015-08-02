function drawMetroScreen() {
    var rect,
        text,
        image;
    
    image = drawImage('1000', '50', '50', '50', 'pics/profile-photo.jpg');
    svg.appendChild(image);
    text = drawText('900', '70', 'Anonymos', 'white', 'header');
    svg.appendChild(text);
    text = drawText('948', '90', 'Anonym', 'white', 'explorer');
    svg.appendChild(text);

    text = drawText('120', '100', 'Start', 'white', 'date');
    svg.appendChild(text);

    rect = drawRect('120', '160', '100', '100', '#1C70EF', 'store');
    svg.appendChild(rect);
    text = drawText('130', '250', 'Store', 'white', 'none');
    svg.appendChild(text);
    image = drawImage('140', '180', '60', '60', 'pics/Marketplace.jpg');
    svg.appendChild(image);

    rect = drawRect('120', '265', '100', '100', '#554094', 'maps');
    svg.appendChild(rect);
    image = drawImage('140', '285', '60', '60', 'pics/maps.jpg');
    svg.appendChild(image);
    text = drawText('130', '355', 'Maps', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('120', '370', '205', '100', '#DB552C', 'video');
    svg.appendChild(rect);
    text = drawText('130', '460', 'Video', 'white', 'none');
    svg.appendChild(text);
    image = drawImage('180', '380', '80', '80', 'pics/video.jpg');
    svg.appendChild(image);

    image = drawImage('120', '475', '205', '100', 'pics/desktop.jpg');
    svg.appendChild(image);
    text = drawText('130', '565', 'Desktop', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('225', '160', '100', '100', '#54A624', 'games');
    svg.appendChild(rect);
    image = drawImage('240', '175', '70', '70', 'pics/games.jpg');
    svg.appendChild(image);
    text = drawText('235', '250', 'Xbox Live Games', 'white', 'none');
    svg.appendChild(text);
    
    rect = drawRect('225', '265', '100', '100', '#3B6EEB', 'internet-explorer');
    svg.appendChild(rect);
    image = drawImage('235', '270', '80', '80', 'pics/IE.jpg');
    svg.appendChild(image);
    text = drawText('235', '355', 'Internet Explorer', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('330', '160', '205', '100', '#AC193D', 'photos');
    svg.appendChild(rect);
    image = drawImage('400', '180', '60', '60', 'pics/photos.jpg');
    svg.appendChild(image);
    text = drawText('340', '250', 'Photos', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('330', '265', '205', '100', '#593E9B', 'messaging');
    svg.appendChild(rect);
    image = drawImage('400', '275', '70', '70', 'pics/messeging.jpg');
    svg.appendChild(image);
    text = drawText('340', '355', 'Messaging', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('330', '370', '205', '100', '#009F3C', 'mail');
    svg.appendChild(rect);
    text = drawText('340', '400', 'Lorem ipsum', 'white', 'header');
    svg.appendChild(text);
    text = drawText('340', '420', 'dolor sit amet, vel cu legere noster ', 'white', 'none');
    svg.appendChild(text);
    text = drawText('340', '435', ' percipit, vim ceteros vituperatoribus', 'white', 'none');
    svg.appendChild(text);
    text = drawText('525', '465', '3', 'white', 'none');
    svg.appendChild(text);
    image = drawImage('335', '450', '20', '20', 'pics/small_mail.png');
    svg.appendChild(image);

    rect = drawRect('330', '475', '205', '100', '#3C84ED', 'weather');
    svg.appendChild(rect);
    image = drawImage('400', '485', '70', '70', 'pics/weather.jpg');
    svg.appendChild(image);
    text = drawText('340', '565', 'Weather', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('540', '160', '205', '100', '#008A00', 'calendar');
    svg.appendChild(rect);
    text = drawText('550', '250', 'Calendar', 'white', 'none');
    svg.appendChild(text);
    text = drawText('670', '210', '12', 'white', 'date');
    svg.appendChild(text);
    text = drawText('670', '225', 'Monday', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('540', '265', '205', '100', '#D24726', 'people');
    svg.appendChild(rect);
    image = drawImage('550', '340', '25', '25', 'pics/People.jpg');
    svg.appendChild(image);
    image = drawImage('550', '275', '65', '65', 'pics/people-inside-pic.jpg');
    svg.appendChild(image);
    text = drawText('620', '285', 'Some text that needs', 'white', 'none');
    svg.appendChild(text);
    text = drawText('620', '300', 'to be entered here, so it ', 'white', 'none');
    svg.appendChild(text);
    text = drawText('620', '315', 'looks like the original', 'none');
    svg.appendChild(text);

    rect = drawRect('540', '370', '100', '100', 'black', 'specific-game');
    svg.appendChild(rect);
    image = drawImage('540', '370', '100', '100', 'pics/pinball.jpg');
    svg.appendChild(image);
    text = drawText('550', '460', 'Pinball 2', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('540', '475', '100', '100', '#AC193D', 'camera');
    svg.appendChild(rect);
    image = drawImage('560', '495', '60', '60', 'pics/camera.jpg');
    svg.appendChild(image);
    text = drawText('550', '565', 'Camera', 'white', 'none');
    svg.appendChild(text);

 
    rect = drawRect('645', '370', '100', '100', '#3D84EE', 'solitaire');
    svg.appendChild(rect);
    image = drawImage('665', '385', '60', '60', 'pics/solitaire.jpg');
    svg.appendChild(image);
    text = drawText('655', '460', 'Solitaire', 'white', 'none');
    svg.appendChild(text);
  
    rect = drawRect('645', '475', '100', '100', '#53A51C', 'xbox');
    svg.appendChild(rect);
    image = drawImage('665', '490', '60', '60', 'pics/xbox.jpg');
    svg.appendChild(image);
    text = drawText('655', '565', 'Xbox Companion', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('785', '160', '205', '100', '#593E9B', 'music');
    svg.appendChild(rect);
    image = drawImage('855', '175', '70', '70', 'pics/music.jpg');
    svg.appendChild(image);
    text = drawText('795', '250', 'Music', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('785', '265', '205', '100', '#008C1B', 'finance');
    svg.appendChild(rect);
    image = drawImage('855', '275', '70', '70', 'pics/finance.jpg');
    svg.appendChild(image);
    text = drawText('795', '355', 'Finance', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('785', '370', '100', '100', '#D24C27', 'reader');
    svg.appendChild(rect);
    image = drawImage('805', '385', '60', '60', 'pics/reader.jpg');
    svg.appendChild(image);
    text = drawText('795', '460', 'Reader', 'white', 'none');
    svg.appendChild(text);

    rect = drawRect('890', '370', '100', '100', '#094AB2', 'windows-explorer');
    svg.appendChild(rect);
    image = drawImage('900', '430', '25', '25', 'pics/folder.jpg');
    svg.appendChild(image);
    text = drawText('900', '390', 'Windows', 'white', 'explorer');
    svg.appendChild(text);
    text = drawText('900', '405', 'Explorer', 'white', 'explorer');
    svg.appendChild(text);
    
    rect = drawRect('785', '475', '205', '70', '#2E8DEF', 'wordpress-pic');
    svg.appendChild(rect);
    image = drawImage('785', '475', '205', '70', 'pics/windows-desktop.jpg');
    svg.appendChild(image);
    rect = drawRect('785', '545', '205', '30', '#207499', 'wordpress-logo');
    svg.appendChild(rect);
    image = drawImage('795', '545', '30', '30', 'pics/wordpress.jpg');
    svg.appendChild(image);
    text = drawText('830', '560', 'Some text about Wordpress here', 'white', 'none');
    svg.appendChild(text);

    image = drawImage('977', '160', '170', '100', 'pics/cat-picture.jpg');
    svg.appendChild(image);
  
    rect = drawRect('995', '265', '205', '100', '#476DD0', 'ease-access');
    svg.appendChild(rect);
    image = drawImage('1040', '280', '70', '70', 'pics/ease-access.jpg');
    svg.appendChild(image);

    rect = drawRect('995', '370', '205', '100', '#3D84EE', 'skydrive');
    svg.appendChild(rect);
    image = drawImage('1035', '380', '70', '70', 'pics/skydrive.jpg');
    svg.appendChild(image);
    text = drawText('1005', '460', 'SkyDrive', 'white', 'none');
    svg.appendChild(text);
}