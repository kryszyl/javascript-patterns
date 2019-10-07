const PageState = function () {
    let currentState = new homeState(this);

    this.init = function () {
        this.change(new homeState);
    }

    this.change = function (state) {
        currentState = state;
    }
};

//Home State
const homeState = function (page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
  `;
};

// About State
const aboutState = function (page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `<p>This is the about page.</p>`;
};

// Contact State
const contactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact';
    document.querySelector('#content').innerHTML = `
    <form>
    <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </form>`;
};

//instatiate pageState

const page = new PageState();

page.init();

// ui vars

const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault();
});
about.addEventListener('click', (e)=> {
    page.change(new aboutState);
    e.preventDefault();
});
contact.addEventListener('click', (e)=> {
    page.change(new contactState);
    e.preventDefault();
});
