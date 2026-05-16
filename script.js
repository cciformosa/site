// Animação ao rolar a página
const revealElements = document.querySelectorAll(
  '.section, .card, .hero h2, .hero p, .hero .btn'
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('reveal', 'active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Simulação do envio do formulário
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    form.reset();
  });
}

/* ===== ESPECIALIDADES COM CARROSSEL DE MÉDICOS ===== */

const doctorsData = {
  cardiologia: [
    {
      image: "imagens/medicos/cardiologista1.png",
      name: "Dr. Luiz Carlos Madruga Ribeiro",
      title: "Cardiologista e Ecocardiografista",

      formation: `
        <ul>
          <li>Cardiologista pelo Instituto de Cardiologia do Distrito Federal;</li>
          <li>Ecocardiografista pelo Instituto de Cardiologia do Distrito Federal;</li>
          <li>Doutorado em Cardiologia pela USP;</li>
          <li>Assistente do Serviço de Cardiologia/Ecocardiografia do Hospital Sírio Libanês 2022.</li>
        </ul> `
    },
    {
      image: "imagens/medicos/cardiologista2.png",
      name: "Dra. Nathahlia Ferigolo Trevisan Ribeiro",
      title: "Cardiologista",
      formation: `
        <ul>
          <li>Residência em Clínica Médica pelo Hospital Regional da Asa Norte;</li>
          <li>Residência em Cardiologia pelo Instituto de Cardiologia do Distrito Federal;</li>
          <li>Médica Assistente da Unidade de Dor Toracica do Instituto de Cardiologia do Distrito Federal.</li>
        </ul> `
    },
    {
      image: "imagens/medicos/cardiologista3.png",
      name: "Dra. Luiza Ferreira Rocha",
      title: "Cardiologista",
      formation: `
        <ul>
          <li>Residência em Clínica Médica pelo Instituto Hospital de Base do Distrito Federal;</li>
          <li>Residência em Cardiologia pelo Instituto de Cardiologia do Distrito Federal;</li>
          <li>Médica Assistente da Unidade de Dor Torácica do ICTDF;</li>
          <li>Médica Assistente do Hospital de Base do Distrito Federal.</li>
        </ul> `
    },
    {
      image: "imagens/medicos/cardiologista4.png",
      name: "Dra. Vanessa de Jesus Ledo Pimentel",
      title: "Cardiologista",
      formation: `
        <ul>
          <li>Residência em Cardiologia pelo Hospital de Base do Distrito Federal;</li>
          <li>Residência em Clínica Médica pela FHEMIG.</li>
        </ul> `
    },
    {
      image: "imagens/medicos/cardiologista5.png",
      name: "Dra. Jessica Alvares Confortin",
      title: "Cardiologista",
      formation: `
        <ul>
          <li>Residência em Clínica Médica pelo Hospital Regional da Asa Norte;</li>
          <li>Residência em Cardiologia pelo Instituto de Cardiologia e Transplantes do Distrito Federal;</li>
          <li>Médica Assistente da Unidade de Dor Torácica do ICTDF;</li>
          <li>Médica Assistente do Hospital de Base do Distrito Federal.</li>
        </ul> `
    },
    {
      image: "imagens/medicos/cardiologista6.jpeg",
      name: "Dr. Rodrigo Lanna",
      title: "Ecocardiografista",
      formation: `
        <ul>
          <li>Médico pela Universidade Federal de Minas Gerais;</li>
          <li>Residência em Clínica Médica pelo Hospital Municipal Odilon Behrens;</li>
          <li>Mestrado em Ciências Médicas Universidade de Brasília;</li>
          </li>Residência em Cardiologia pelo Instituto Santa Marta de Ensino e Pesquisa;</li>
          </li>Residência em Ecocardiografia pelo Instituto de Cardiologia e Transplantes do DF.</li>
        </ul> `
    }
  ],

  arritmologia: [
    {
      image: "imagens/medicos/arritmologista1.png",
      name: "Dr. Paulo Brandao",
      title: "Arritmologista",

      formation: `
        <ul>
          <li>Médico pela UCB;</li>
          <li>Cardiologista pelooo FEPECS;</li>
          <li>Arritmologista pela Sociedade Brasileira de Cardiologia;</li>
          <li>Marcapassista.</li>
        </ul> `
    },
  ],

  pneumologia: [
    {
      image: "imagens/medicos/pneumologista1.png",
      name: "Dra. Patricia Andrada Rodrigues Pimenta",
      title: "Pneumologista",
      formation: `
      <ul>
        <li>Médica pela UNB;</li>
        <li>Residência em Clínica Médica pelo Hospital Regional de Taguatinga;</li>
        <li>Residência em Pneumologia pelo Hospital de Base de Brasília;</li>
        <li>Título de Especialista em Pneumologia e Tisiologia pela SBPT.</li>
        <li>Medicina do Sono De São Paulo</li>
      </ul>
    `
    }
  ],

  vascular: [
    {
      image: "imagens/medicos/vascular1.png",
      name: "Dra. Vittoria Melo Letriere",
      title: "Cirurgia Vascular/Angiologista",
      formation: `
      <ul>
        <li>Médica pela UNICEPLAC;</li>
        <li>Residência em Cirurgia Vascular pelo HFA;</li>
      </ul>
    `
    },
    {
      image: "imagens/medicos/vascular2.png",
      name: "Dra. Rosa Tanmirys",
      title: "Cirurgia Vascular/Angiologista",
      formation: `
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    `
    }
  ],

  ortopedia: [
    {
      image: "imagens/medicos/ortopedista1.png",
      name: "Dr. Jaime Tadashi Naito",
      title: "Ortopedista",
      formation: `
      <ul>
        <li>Médico pela UNIPAM;</li>
        <li>Residência em Ortopedia e Traumatologia pela Universidade de Uberaba;</li>
        <li>Especialista em Cirurgia do Quadril;</li>
        <li>Membro do SBOT.</li>
      </ul>
    `
    },
    {
      image: "imagens/medicos/ortopedista2.png",
      name: "Dr. Danilo Lacerda Viana",
      title: "Ortopedista",
      formation: `
      <ul>
        <li>Universidade Regional de Gurupi (UNIRG);</li>
        <li>Residência em Ortopedia e Traumatologia pelo HFA;</li>
        <li>Pós-Graduação em Cardiologia pelo IPEMED;</li>
        <li>Curso de Infiltração Musculoesquelética pela Nexus.</li>
      </ul>
    `
    }
  ],

  dermatologia: [
    {
      image: "imagens/medicos/dermatologista1.png",
      name: "Dra. Gianne Palacio Eller",
      title: "Dermatologista",
      formation: `
      <ul>
        <li>Médica pela UNIPAM;</li>
        <li>Pós-graduada em Dermatologia pela Faculdade Premium.</li>
      </ul>
    `
    }
  ],

  clinico: [
    {
      image: "imagens/medicos/clinico1.png",
      name: "Dra. Bruna Luiza",
      title: "Clínico Geral",
      formation: `
      <ul>
        <li>Médica pela Universidade Federal de Mato Grosso;</li>
        <li>Atuação como Clínica Geral no Hospital Estadual de Formosa;</li>
        <li>Atuação como Clínica Geral no Hospital São Camilo;</li>
      </ul>
    `
    }
  ],

  nutricao: [
    {
      image: "imagens/medicos/nutricionista1.png",
      name: "Dra. Grazielle Leão Affiune",
      title: "Nutricionista",
      formation: `
      <ul>
        <li>Nutricionista pela Universidade Paulista de Goiânia;</li>
        <li>Pós-Graduada em Nutrição Clínica pela Universidade Gama Filho;</li>
        <li>Especialização em Modulação Intestinal pelo Instituto Murilo Pereira;</li>
        <li>Pós-Graduada em Nutrição Esportiva pela UPGS.</li>
      </ul>
    `
    }
  ],

  nefrologia: [
    {
      image: "imagens/medicos/nefrologista1.png",
      name: "Dra. Marcella Silva Nessralla",
      title: "Nefrologista",
      formation: `
      <ul>
        <li>Médica pela UNICEPLAC;</li>
        <li>Residência em Clínica Médica no Hospital Regional de Sobradinho - DF;</li>
        <li>Residência em Nefrologia no Hospital Regional de Sobradinho – DF;</li>
        <li>Especialista em Nefrologia Ambulatorial, Nefrologia Intensiva, Hemodiálise e Diálise Peritoneal.</li>
    `
    }
  ],

  psicologia: [
    {
      image: "imagens/medicos/psicologa1.jpeg",
      name: "Dra. Vanessa Alves",
      title: "Psicóloga",
      formation: `
      <ul>
        <li>Psicóloga clínica pela IESGO.</li>
      </ul>
    `
    },
    {
      image: "imagens/medicos/psicologa2.png",
      name: "Dra. Priscilla Honorato",
      title: "Psicóloga",
      formation: `
      <ul>
        <li>Psicóloga clínica pela IESGO;</li>
        <li>Especialista em Psicologia de Trânsito.</li>
      </ul>
    `
    }
  ],

  ginecologia: [
  {
    image: "imagens/medicos/ginecologista1.png",
    name: "Dr. Juliano Terra Hochmuller",
    title: "Ginecologista",
    formation: `
      <ul>
        <li>Médico pela UniEvangélica;</li>
        <li>Residencia em Ginecologia e Obstetricia pela Universidade de Uberaba;</li>
      </ul>
    `
  }
],

ultrassonografia: [
  {
    image: "imagens/medicos/ultrassonografia1.png",
    name: "Dra. Mariana Bernardes Anversa",
    title: "Ultrassonografista",
    formation: `
      <ul>
        <li>Médica pela UniCEUB;</li>
        <li>Residência Médica em Radiologia e Diagnóstico por Imagem pelo Hospital de Base</li>
        <li>Fellow em Neurorradiologia pelo Sabin.</li>
      </ul>
    `
  },
  {
    image: "imagens/medicos/ultrassonografia2.jpg",
    name: "Dra. Patricia Bellei",
    title: "Ultrassonografista",
    formation: `
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    `
  }
]
};

let currentDoctors = [];
let currentDoctorIndex = 0;

const specialtyCards = document.querySelectorAll('.specialty-card');
const modal = document.getElementById('specialtyModal');
const closeModal = document.getElementById('closeModal');

const doctorImage = document.getElementById('doctorImage');
const doctorName = document.getElementById('doctorName');
const doctorTitle = document.getElementById('doctorTitle');
const doctorFormation = document.getElementById('doctorFormation');

const prevDoctor = document.getElementById('prevDoctor');
const nextDoctor = document.getElementById('nextDoctor');

function renderDoctor() {
  const doctor = currentDoctors[currentDoctorIndex];

  doctorImage.src = doctor.image;
  doctorImage.alt = doctor.name;
  doctorName.textContent = doctor.name;
  doctorTitle.textContent = doctor.title;
  doctorFormation.innerHTML = doctor.formation;
}

function openModal(specialty) {
  currentDoctors = doctorsData[specialty];

  if (!currentDoctors || currentDoctors.length === 0) return;

  currentDoctorIndex = 0;
  renderDoctor();
  modal.classList.add('active');
}

function closeSpecialtyModal() {
  modal.classList.remove('active');
}

specialtyCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const specialty = card.dataset.specialty;
    openModal(specialty);
  });
});

closeModal.addEventListener('click', closeSpecialtyModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeSpecialtyModal();
  }
});

prevDoctor.addEventListener('click', () => {
  currentDoctorIndex =
    (currentDoctorIndex - 1 + currentDoctors.length) %
    currentDoctors.length;
  renderDoctor();
});

nextDoctor.addEventListener('click', () => {
  currentDoctorIndex =
    (currentDoctorIndex + 1) %
    currentDoctors.length;
  renderDoctor();
});
