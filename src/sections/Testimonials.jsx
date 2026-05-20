// import { useEffect, useState } from 'react';
// import './Testimonials.css';

// const STORAGE_KEY = 'portfolio_testimonials';

// function loadTestimonials() {
//   if (typeof window === 'undefined') return [];
//   try {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     return stored ? JSON.parse(stored) : [];
//   } catch {
//     return [];
//   }
// }

// export default function Testimonials() {
//   const [testimonials, setTestimonials] = useState(() => loadTestimonials());
//   const [form, setForm] = useState({ name: '', rating: '5', message: '' });
//   const [status, setStatus] = useState('idle');

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
//   }, [testimonials]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name.trim() || !form.message.trim()) {
//       setStatus('error');
//       return;
//     }

//     const nextTestimonial = {
//       id: Date.now(),
//       name: form.name.trim(),
//       message: form.message.trim(),
//       rating: Number(form.rating),
//       date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
//     };

//     setTestimonials((prev) => [nextTestimonial, ...prev]);
//     setForm({ name: '', rating: '5', message: '' });
//     setStatus('success');
//   };

//   return (
//     <section id="testimonials" className="section testimonials" aria-label="Avis des visiteurs">
//       <div className="container">
//         <div className="testimonials__header">
//           <p className="section-label">Avis</p>
//           <h2 className="section-title">Ce que les visiteurs disent</h2>
//           <p className="section-subtitle">
//             Publiez un avis en ligne et partagez votre expérience. Tous les commentaires sont visibles immédiatement.
//           </p>
//         </div>

//         <div className="testimonials__grid">
//           <div className="testimonials__list">
//             <div className="testimonials__topbar">
//               <span className="testimonials__count">{testimonials.length} avis publiés</span>
//               <span className="testimonials__note">Visible par tous les visiteurs</span>
//             </div>

//             {testimonials.length === 0 ? (
//               <div className="testimonials__empty">
//                 <p>Soyez le premier à laisser un avis sur ce portfolio.</p>
//               </div>
//             ) : (
//               <div className="testimonials__cards">
//                 {testimonials.map((item) => (
//                   <article key={item.id} className="testimonials__card">
//                     <div className="testimonials__card-top">
//                       <div>
//                         <p className="testimonials__name">{item.name}</p>
//                         <p className="testimonials__date">{item.date}</p>
//                       </div>
//                       <div className="testimonials__rating" aria-label={`Note ${item.rating} sur 5`}>
//                         {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
//                       </div>
//                     </div>
//                     <p className="testimonials__message">{item.message}</p>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </div>

//           <aside className="testimonials__form-panel">
//             <div className="testimonials__form-card">
//               <p className="testimonials__form-label">Laissez votre avis</p>
//               <form onSubmit={handleSubmit} className="testimonials__form" aria-label="Formulaire d'avis">
//                 <label htmlFor="testimonial-name">Nom</label>
//                 <input
//                   id="testimonial-name"
//                   name="name"
//                   type="text"
//                   placeholder="Votre nom"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label htmlFor="testimonial-rating">Note</label>
//                 <select
//                   id="testimonial-rating"
//                   name="rating"
//                   value={form.rating}
//                   onChange={handleChange}
//                 >
//                   <option value="5">5 - Excellent</option>
//                   <option value="4">4 - Très bien</option>
//                   <option value="3">3 - Bien</option>
//                   <option value="2">2 - À améliorer</option>
//                   <option value="1">1 - Insuffisant</option>
//                 </select>

//                 <label htmlFor="testimonial-message">Votre avis</label>
//                 <textarea
//                   id="testimonial-message"
//                   name="message"
//                   placeholder="Écrivez votre expérience ici..."
//                   rows={5}
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                 />

//                 <button type="submit" className="btn btn-primary">
//                   Publier mon avis
//                 </button>

//                 {status === 'success' && (
//                   <p className="testimonials__status testimonials__status--success">
//                     Merci ! Votre avis est publié.
//                   </p>
//                 )}
//                 {status === 'error' && (
//                   <p className="testimonials__status testimonials__status--error">
//                     Veuillez saisir votre nom et votre message.
//                   </p>
//                 )}
//               </form>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }
