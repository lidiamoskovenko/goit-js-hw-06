const categoriesEl = document.querySelector('#categories');

    const itemsEl = categoriesEl.querySelectorAll('.item');

    console.log(`Кількість категорій: ${itemsEl.length}`);

    itemsEl.forEach(item => {
      
      const TitleEl = item.querySelector('h2').textContent;

      const subItemEl = item.querySelectorAll('li');

      console.log(`Категорія: ${TitleEl}, Кількість підкатегорій: ${subItemEl.length}`);
    });
 






