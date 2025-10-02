document.addEventListener('DOMContentLoaded',()=>{
  const searchInputs=document.querySelectorAll('[data-search]');
  searchInputs.forEach(input=>{
    input.addEventListener('input',()=>{
      const q=input.value.toLowerCase();
      const targetSelector=input.getAttribute('data-target');
      const textSelector=input.getAttribute('data-text')||'*';
      document.querySelectorAll(targetSelector).forEach(node=>{
        const text=node.querySelector(textSelector)?.textContent||node.textContent||'';
        node.style.display=text.toLowerCase().includes(q)?'':'none';
      });
    });
  });

  document.querySelectorAll('form[data-confirm] button[type="submit"]').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      const form=btn.closest('form');
      const msg=form?.getAttribute('data-confirm')||'Are you sure?';
      if(!confirm(msg)){
        e.preventDefault();
      }
    });
  });
});

