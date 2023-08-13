const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.listStyle = 'none';
gallery.style.padding = '0';

const gallerListup = images.map(image => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', gallerListup);

const galleryItems = gallery.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.style.margin = '15px';
  item.style.width= '600px';

});

const galleryImages = gallery.querySelectorAll('.gallery-image');
galleryImages.forEach(image => {
  image.style.maxWidth = '100%';
  image.style.height = '100%';
});
