# __Projektdokumentation__

#### __Navn:__ Andreas Hedberg Pilegaard

#### __Hold:__ 1146521c105 / WU05

#### __Uddannelse:__ Webudvikler

#### __Uddannelsessted:__ Roskilde Tekniske Skole

---

__Jamstack__ er den teknologistack der gøres brug af i opgaven.

Jam står for:
* __Javascript__
* __api__
* __markup__

Det er designet til at gøre vores website hurtigere, mere sikker og skalerbart. det bliver gjordt med pre-rendering og decopling.

---

__React__ er et JavaScript bibliotek, der bruges til at udvikle bruger interfaces og gør det nemt og overskueligt for udvikleren, med en overskuelig opbygning og fil-fordeling. 

---

### __Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen:__

* __@emotion/react__
	- __@emotion/react__ lader mig skrive Css direjkte i mit react component og det giver mig mulighed for at neste min Css ligesom i Sass.
* __react-router-dom__
	- __@reach/router__ lader mig navigere rundt på siden.
* __Framer-Motion__
	- __Framer-Motion__ lader mig lave et slags component jeg kan style til eget behov. Biblioteket har en del predefineret animations faktore som gør at det er hurgtigere kan gøre dine elementer levende.
* __Axios__
	- __Axios__ er en promise-baseret HTTP client som virker både i browseren og i NodeJS. Med andre ord så er __Axios__ en måde hvor på jeg kan fetche data fra Api'er.
* __react-hook-form__
	- __react-hook-form__ lader mig nemt hente data fra inputs hurtigt og nemt, den udskriver det i et objekt og lader mig også validere inputs.
* __react-icons__
	- __React-icons__ gør det muligt at bruge/hente ikoner.
* __Toastify__
	- __Toastify__ lader mig få et synligt response på en formular, som jeg selv kan style til eget behov.
* __React-Elastic-Carousel__
	- __React-Elastic-Carousel__ giver mig en pre difineret slider som jeg kan style og sætte indehold ind i.


---

### __Argumentation for de valg der selvstændigt er truffet under løsningen af opgaven__

Jeg har valgt at lave ekstra opgaven __Booking__ på basis af at jeg syntes den så sjovest ud.

Jeg valgte at starte på siden uden animationer, fordi jeg tænkte at hvis jeg ikke kunne nå det ville det være noget af det jeg kunne overleve uden. Dog har jeg fået lavet dem alle.

---

### __Vurdering af egen indsats & gennemførelse af opgaveforløbet__

Jeg syntes arbejdsgangen med denne opgave er gået super godt. Jeg kom super god igang fra start af og så har der enlig bare været et super godt flow hele vejen igennem.

---

### __En beskrivelse af særlige punkter til bedømmelse__

Jeg syntes at måden jeg har lavet mit lightbox galleri er ret så intrasant at gå igennem.

Jeg starter med at lave nogle states. isHover0 bliver brugt til at finde ud af om musen er over et af billederne. isLightbox bliver brugt til at finde ud af om lightboxen synlig eller ej.
```javascript
const [isHover0, setIsHover0] = useState(false);
const [isLightbox, setIsLightbox] = useState(false);
```

Dette er mit billede der siger onMouseEnter skal set isHover0 til true og omvent for onMouseLeave.
Derefter inder vi ud af om isHover0 er true.
hvis den er true bliver der tilføjet et overlay og når det bliver klikket på sættes isLightbox til true
```javascript
<div className='galBox' onMouseEnter={() => setIsHover0(true)} onMouseLeave={ () => setIsHover0(false)}>
    <motion.div 
	initial={{ opacity: 0}} 
	animate={{ opacity: 1 }} 
	exit={{ opacity: 0 }}  
	src={gallery?.[0].asset.url} 
	alt={gallery?.[0].description} 
	/>
    {isHover0 && (
        <div className="overlay" onClick={() => setIsLightbox(true)}/>
    )}
</div>
```
Denne del er koden siger hvis isLightbox er true så udskriv det
```javascript
{isLightbox && (
    <Lightbox setIsLightbox={setIsLightbox}/>
)}
```


