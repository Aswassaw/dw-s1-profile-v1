class Testimonial {
  #message = "";
  #image = "";

  constructor(message, image) {
    this.#message = message;
    this.#image = image;
  }

  get message() {
    return this.#message;
  }

  get image() {
    return this.#image;
  }

  get author() {
    throw new Error("getAuthor() method must be implemented.");
  }

  get testimonialHTML() {
    return `
      <div class="testimonial-card">
        <img class="testimonial-image" src="${this.image}" alt="Gambar alt" width="100%">
        <p class="testimonial-message">${this.message}</p>
        <p class="testimonial-author">
          - ${this.author}
        </p>
      </div>
    `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, message, image) {
    super(message, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, message, image) {
    super(message, image);
    this.#company = author;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Slifer The Sky Dragon",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, perspiciatis.",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c977eabb-4db6-4ef1-9f0c-1fe00e997eaa/dauamsg-81b98799-0fb0-475d-9138-8d4be8c927a3.png/v1/fill/w_894,h_894,q_70,strp/slifer_the_sky_dragon_1080p_by_yugi_master_dauamsg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2M5NzdlYWJiLTRkYjYtNGVmMS05ZjBjLTFmZTAwZTk5N2VhYVwvZGF1YW1zZy04MWI5ODc5OS0wZmIwLTQ3NWQtOTEzOC04ZDRiZThjOTI3YTMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dwt4tSvVCOG0I17wRYKjC4JpOgYS6mnWaAmR7tIsmA0"
);

const testimonial2 = new AuthorTestimonial(
  "Obelish The Tormentor",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quam.",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c977eabb-4db6-4ef1-9f0c-1fe00e997eaa/dauamv6-6128c036-3ef5-4265-bd46-15431aa3d0b3.png/v1/fill/w_894,h_894,q_70,strp/obelisk_the_tormentor_1080p_by_yugi_master_dauamv6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2M5NzdlYWJiLTRkYjYtNGVmMS05ZjBjLTFmZTAwZTk5N2VhYVwvZGF1YW12Ni02MTI4YzAzNi0zZWY1LTQyNjUtYmQ0Ni0xNTQzMWFhM2QwYjMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gwYrAAexfTifjr84WhYS3xPGcMiD9sXAhR9mLw87y4Q"
);

const testimonial3 = new AuthorTestimonial(
  "The Winged Dragon Of Ra",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, itaque.",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c977eabb-4db6-4ef1-9f0c-1fe00e997eaa/dauamxf-1ce85694-1433-48d2-a12b-c439989e3439.png/v1/fill/w_894,h_894,q_70,strp/the_winged_dragon_of_ra_1080p_by_yugi_master_dauamxf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2M5NzdlYWJiLTRkYjYtNGVmMS05ZjBjLTFmZTAwZTk5N2VhYVwvZGF1YW14Zi0xY2U4NTY5NC0xNDMzLTQ4ZDItYTEyYi1jNDM5OTg5ZTM0MzkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cmu0DD65lXQsTifIRQVVA3_LkP_Oh9M3tpmzg28KGPA"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonial").innerHTML = testimonialHTML;
