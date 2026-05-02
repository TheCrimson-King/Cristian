// Acordeón
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.accordion').forEach(btn=>{
    btn.addEventListener('click',()=> {
      const id = btn.dataset.target;
      const panel = document.getElementById(id);
      const isOpen = panel.style.display === 'block';
      document.querySelectorAll('.panel').forEach(p=>p.style.display='none');
      panel.style.display = isOpen ? 'none' : 'block';
    });
  });

  function calcularRol() {
  const val = document.getElementById('land-select').value;
  const res = document.getElementById('rol-result');
  if(val === 'none') res.textContent = "Eres un Campesino o Villano: Trabajas la tierra y buscas protección.";
  if(val === 'fief') res.textContent = "Eres un Caballero o Noble menor: Posees tierras y juras lealtad a un señor.";
  if(val === 'kingdom') res.textContent = "Eres un Gran Señor o Monarca: Distribuyes tierras a cambio de lealtad militar.";
}

  // Timeline botones muestran detalles en diálogo accesible
  document.querySelectorAll('.detail-btn').forEach(b=>{
    b.addEventListener('click',()=> {
      const info = b.dataset.info;
      if(window.confirm(info + "\n\n¿Cerrar?")) return;
    });
  });

  // Glosario tooltip con posicionamiento simple
  const tooltip = document.getElementById('tooltip');
  document.querySelectorAll('.glossary-term').forEach(term=>{
    term.addEventListener('mouseenter', e=>{
      tooltip.textContent = term.dataset.def;
      tooltip.style.display = 'block';
      tooltip.setAttribute('aria-hidden','false');
      const r = term.getBoundingClientRect();
      const left = Math.min(window.innerWidth - 300, r.right + 10);
      tooltip.style.left = left + 'px';
      tooltip.style.top = (r.top) + 'px';
    });
    term.addEventListener('mouseleave', ()=> {
      tooltip.style.display = 'none';
      tooltip.setAttribute('aria-hidden','true');
    });
    term.addEventListener('focus', e=> {
      tooltip.textContent = term.dataset.def;
      tooltip.style.display = 'block';
      tooltip.setAttribute('aria-hidden','false');
    });
    term.addEventListener('blur', ()=> {
      tooltip.style.display = 'none';
      tooltip.setAttribute('aria-hidden','true');
    });
  });

  // Quiz simple con retroalimentación
  document.querySelectorAll('.quiz .opt').forEach(opt=>{
    opt.addEventListener('click',()=>{
      const fb = opt.closest('.q').querySelector('.feedback');
      if(opt.dataset.correct === "true"){
        fb.textContent = 'Correcto. 476 es la fecha convencional.';
        fb.style.color = 'green';
      } else {
        fb.textContent = 'Incorrecto. Revisa la cronología.';
        fb.style.color = 'crimson';
      }
      fb.setAttribute('aria-hidden','false');
    });
  });

  // Mejora de accesibilidad: permitir navegación por teclado en botones
  document.querySelectorAll('button, a').forEach(el=>{
    el.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        el.click();
      }
    });
  });
});
