/**
 * ============================================================================
 * SLUSH - CORE FRONTEND CONTROLLER (ENGINEERING & DATA ARCHITECTURE)
 * Orquestador de Google Maps, Filtrado de Aforo, Tiras Accordion y Panel SSMS
 * Valle de Aburrá, Antioquia (2026)
 * ============================================================================
 */

// 1. DATASET COMPLETO DE PUNTOS COMERCIALES (Espejo de GranizadosMedellin en SQL Server)
const DATASET_LOCALES_SLUSH = [
    {
        id: 1,
        nombre: "Ilícito Granizados",
        sector: "El Poblado / Sur",
        municipio: "Medellín",
        direccion: "Carrera 43A # 9 S-194",
        telefono: "3001112233",
        coordenadas: [6.2085, -75.5678],
        rating: 4.5,
        demanda: "Alta",
        temperatura: "24.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido / Soleado"
    },
    {
        id: 2,
        nombre: "Granizados Medellín (Siglo 22)",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Transversal 39B # 74B-112",
        telefono: "3002223344",
        coordenadas: [6.2482, -75.5891],
        rating: 4.2,
        demanda: "Media",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 3,
        nombre: "Granizados Medellín – Belén",
        sector: "Belén",
        municipio: "Medellín",
        direccion: "Calle 63 # 77-69",
        telefono: "3004445566",
        coordenadas: [6.2351, -75.6012],
        rating: 4.0,
        demanda: "Media",
        temperatura: "21.8 °C",
        sensacion: "22.2 °C",
        condicion: "Fresco / Nublado"
    },
    {
        id: 4,
        nombre: "Guillotina Granizados/licorera",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Calle 35 #80a-71",
        telefono: "3196287958",
        coordenadas: [6.2431, -75.5921],
        rating: 4.3,
        demanda: "Media",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 5,
        nombre: "El coctelista urban",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Circular 2 #66B - 4",
        telefono: "3042140341",
        coordenadas: [6.2442, -75.5901],
        rating: 4.1,
        demanda: "Media",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 6,
        nombre: "Siglo 22XL",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Transversal 39D #39B-96",
        telefono: "3137152426",
        coordenadas: [6.2485, -75.5895],
        rating: 4.4,
        demanda: "Alta",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 7,
        nombre: "Ilícito Granizados (Laureles)",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Calle 35 #80-87, local 101",
        telefono: "3001112233",
        coordenadas: [6.2433, -75.5925],
        rating: 4.6,
        demanda: "Alta",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 8,
        nombre: "Ice Paradise",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Circular 4 #72-58",
        telefono: "3013784600",
        coordenadas: [6.2451, -75.5912],
        rating: 4.0,
        demanda: "Media",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 9,
        nombre: "Granizados hot ice",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Carrera 73, Circular 4 #18",
        telefono: "3003221395",
        coordenadas: [6.2458, -75.5918],
        rating: 3.9,
        demanda: "Media",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 10,
        nombre: "Granizados Monster Ice",
        sector: "Estadio - Laureles",
        municipio: "Medellín",
        direccion: "Carrera 69 #51-32",
        telefono: "3054070053",
        coordenadas: [6.2465, -75.5880],
        rating: 4.2,
        demanda: "Media",
        temperatura: "23.0 °C",
        sensacion: "24.5 °C",
        condicion: "Cálido"
    },
    {
        id: 11,
        nombre: "Granizados los consagrados",
        sector: "Belén",
        municipio: "Medellín",
        direccion: "Diagonal 75B #2A - 121",
        telefono: "3108629133",
        coordenadas: [6.2280, -75.6000],
        rating: 4.5,
        demanda: "Alta",
        temperatura: "21.8 °C",
        sensacion: "22.2 °C",
        condicion: "Fresco / Nublado"
    },
    {
        id: 12,
        nombre: "Granizados la Galeria",
        sector: "Belén",
        municipio: "Medellín",
        direccion: "Calle 24 #70A-08",
        telefono: "N/A",
        coordenadas: [6.2305, -75.5960],
        rating: 3.8,
        demanda: "Baja",
        temperatura: "21.8 °C",
        sensacion: "22.2 °C",
        condicion: "Fresco / Nublado"
    },
    {
        id: 13,
        nombre: "Froozzy Cocktails",
        sector: "Castilla",
        municipio: "Medellín",
        direccion: "Carrera 72 #98 75",
        telefono: "3015778665",
        coordenadas: [6.2850, -75.5790],
        rating: 4.5,
        demanda: "Alta",
        temperatura: "21.2 °C",
        sensacion: "21.8 °C",
        condicion: "Fresco"
    },
    {
        id: 14,
        nombre: "Astrolce",
        sector: "Envigado",
        municipio: "Envigado",
        direccion: "Diagonal 32B #33A Sur 05",
        telefono: "3244127779",
        coordenadas: [6.1700, -75.5820],
        rating: 4.6,
        demanda: "Alta",
        temperatura: "21.0 °C",
        sensacion: "21.3 °C",
        condicion: "Fresco"
    },
    {
        id: 15,
        nombre: "La Ofi",
        sector: "Sabaneta",
        municipio: "Sabaneta",
        direccion: "Carrera 44 #67Sur-56",
        telefono: "3105453564",
        coordenadas: [6.1510, -75.6130],
        rating: 4.3,
        demanda: "Media",
        temperatura: "21.5 °C",
        sensacion: "22.0 °C",
        condicion: "Fresco"
    },
    {
        id: 16,
        nombre: "Hoz granizados",
        sector: "Buenos Aires",
        municipio: "Medellín",
        direccion: "Carrera 28 #49-23",
        telefono: "N/A",
        coordenadas: [6.2390, -75.5510],
        rating: 3.8,
        demanda: "Baja",
        temperatura: "21.6 °C",
        sensacion: "22.0 °C",
        condicion: "Templado"
    }
];

// 2. CLASE ARQUITECTURAL DE CONTROL DEL SISTEMA
class SlushEngineSystem {
    constructor() {
        this.dataset = DATASET_LOCALES_SLUSH;
        this.filtroDemanda = "Todos";
        this.localActivo = null;

        this.initDOMReferences();
        this.initRadarGoogleMaps();
        this.renderSelectorLocales();
        this.bindFiltrosDemanda();
        this.bindTirasAccordion();
        this.bindSliderAuditoria();
        this.initContadoresAnimados();
    }

    initDOMReferences() {
        this.radarContainer = document.getElementById('radar-puntos');
        this.selectorGrid = document.getElementById('locales-grid-selector');
        this.tiendaVacia = document.getElementById('tienda-vacia');
        this.tiendaDetalle = document.getElementById('tienda-detalle');
        
        // Elementos del Detalle
        this.detId = document.getElementById('det-id');
        this.detNombre = document.getElementById('det-nombre');
        this.detDireccion = document.getElementById('det-direccion');
        this.detSector = document.getElementById('det-sector');
        this.detTelefono = document.getElementById('det-telefono');
        this.detTemp = document.getElementById('det-temp');
        this.detSensacion = document.getElementById('det-sensacion');
        this.detCondicion = document.getElementById('det-condicion');
        this.detRating = document.getElementById('det-rating');
        this.detEstrellas = document.getElementById('det-estrellas');
        this.detDemanda = document.getElementById('det-demanda');
        this.btnRutaExterna = document.getElementById('btn-ruta-externa');
        this.btnVerQuery = document.getElementById('btn-ver-query-local');

        // Botones de Tiras
        this.btnExpandirTodas = document.getElementById('btn-expandir-todas');
        this.btnColapsarTodas = document.getElementById('btn-colapsar-todas');
        this.tirasDetails = document.querySelectorAll('details.despliegue-codigo');

        // Panel de Auditoría
        this.btnTogglePanel = document.getElementById('btn-toggle-panel');
        this.sliderPanel = document.getElementById('slider-panel');
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.slides = document.querySelectorAll('.slide-content');
    }

    // Inicializa los pines interactivos sobre la proyección de Google Maps
    initRadarGoogleMaps() {
        this.radarContainer.innerHTML = '';
        
        // Cálculo relativo de posiciones sobre el marco del mapa
        const bounds = {
            minLat: 6.1400, maxLat: 6.2900,
            minLng: -75.6200, maxLng: -75.5400
        };

        const localesFiltrados = this.filtroDemanda === "Todos" 
            ? this.dataset 
            : this.dataset.filter(l => l.demanda === this.filtroDemanda);

        localesFiltrados.forEach((local, idx) => {
            const [lat, lng] = local.coordenadas;
            const topPct = 100 - (((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 80 + 10);
            const leftPct = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 80 + 10;

            let colorPin = "#00e676";
            if (local.demanda === "Alta") colorPin = "#ff3366";
            if (local.demanda === "Media") colorPin = "#ffb300";

            const pin = document.createElement('div');
            pin.className = 'radar-pin';
            pin.style.top = `${Math.min(Math.max(topPct, 8), 90)}%`;
            pin.style.left = `${Math.min(Math.max(leftPct, 8), 90)}%`;
            pin.style.backgroundColor = colorPin;
            pin.style.color = colorPin;
            pin.title = `${local.nombre} (${local.sector})`;
            pin.innerHTML = '🍧';

            pin.addEventListener('click', () => {
                this.seleccionarLocal(local);
            });

            this.radarContainer.appendChild(pin);
        });
    }

    // Renderiza la lista inferior de selección rápida
    renderSelectorLocales() {
        this.selectorGrid.innerHTML = '';
        const localesFiltrados = this.filtroDemanda === "Todos" 
            ? this.dataset 
            : this.dataset.filter(l => l.demanda === this.filtroDemanda);

        localesFiltrados.forEach(local => {
            const card = document.createElement('div');
            card.className = `card-local-item ${this.localActivo && this.localActivo.id === local.id ? 'active' : ''}`;
            card.setAttribute('data-id', local.id);

            let colorChip = "var(--color-exito)";
            if (local.demanda === "Alta") colorChip = "var(--color-peligro)";
            if (local.demanda === "Media") colorChip = "var(--color-alerta)";

            card.innerHTML = `
                <div>
                    <h4>${local.nombre}</h4>
                    <p>${local.sector} • ${local.municipio}</p>
                </div>
                <span style="color: ${colorChip}; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">${local.demanda}</span>
            `;

            card.addEventListener('click', () => {
                this.seleccionarLocal(local);
            });

            this.selectorGrid.appendChild(card);
        });
    }

    // Muestra y actualiza la tarjeta lateral de detalle
    seleccionarLocal(local) {
        this.localActivo = local;
        this.tiendaVacia.classList.add('hidden');
        this.tiendaDetalle.classList.remove('hidden');

        this.detId.textContent = `ID #${local.id}`;
        this.detNombre.textContent = local.nombre;
        this.detDireccion.innerHTML = `<i class='bx bx-map-pin'></i> ${local.direccion}`;
        this.detSector.innerHTML = `<i class='bx bx-buildings'></i> Sector: ${local.sector} (${local.municipio})`;
        this.detTelefono.innerHTML = `<i class='bx bx-phone'></i> Contacto: ${local.telefono}`;
        this.detTemp.textContent = local.temperatura;
        this.detSensacion.textContent = local.sensacion;
        this.detCondicion.textContent = local.condicion;
        this.detRating.textContent = local.rating.toFixed(1);
        this.detEstrellas.textContent = "★".repeat(Math.round(local.rating));

        this.detDemanda.textContent = `Demanda ${local.demanda}`;
        if (local.demanda === "Alta") {
            this.detDemanda.style.color = "var(--color-peligro)";
            this.detDemanda.style.borderColor = "var(--color-peligro)";
            this.detDemanda.style.background = "rgba(255, 51, 102, 0.15)";
        } else if (local.demanda === "Media") {
            this.detDemanda.style.color = "var(--color-alerta)";
            this.detDemanda.style.borderColor = "var(--color-alerta)";
            this.detDemanda.style.background = "rgba(255, 179, 0, 0.15)";
        } else {
            this.detDemanda.style.color = "var(--color-exito)";
            this.detDemanda.style.borderColor = "var(--color-exito)";
            this.detDemanda.style.background = "rgba(0, 230, 118, 0.15)";
        }

        // Enlace oficial de navegación GPS en Google Maps
        this.btnRutaExterna.onclick = () => {
            const [lat, lng] = local.coordenadas;
            const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
            window.open(url, '_blank');
        };

        // Acceso rápido a la consulta SQL
        this.btnVerQuery.onclick = () => {
            window.location.href = "#tiras-sql";
        };

        // Resaltar en la cuadrícula inferior
        document.querySelectorAll('.card-local-item').forEach(c => {
            c.classList.remove('active');
            if (parseInt(c.getAttribute('data-id')) === local.id) {
                c.classList.add('active');
            }
        });
    }

    // Filtros reactivos por demanda
    bindFiltrosDemanda() {
        const botones = document.querySelectorAll('.btn-filtro[data-filter]');
        botones.forEach(btn => {
            btn.addEventListener('click', () => {
                botones.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                this.filtroDemanda = btn.getAttribute('data-filter');
                this.initRadarGoogleMaps();
                this.renderSelectorLocales();
            });
        });
    }

    // Desplegar / Colapsar todas las tiras de código
    bindTirasAccordion() {
        if (this.btnExpandirTodas && this.btnColapsarTodas) {
            this.btnExpandirTodas.addEventListener('click', () => {
                this.tirasDetails.forEach(d => d.open = true);
            });

            this.btnColapsarTodas.addEventListener('click', () => {
                this.tirasDetails.forEach(d => d.open = false);
            });
        }
    }

    // Navegación por las 10 pestañas del panel de auditoría SSMS y Toggle
    bindSliderAuditoria() {
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetSlide = btn.getAttribute('data-slide');

                this.tabBtns.forEach(b => b.classList.remove('active'));
                this.slides.forEach(s => s.classList.remove('active'));

                btn.classList.add('active');
                const activeSlide = document.getElementById(`slide-${targetSlide}`);
                if (activeSlide) activeSlide.classList.add('active');
            });
        });

        // Ocultar / Mostrar panel completo
        let panelVisible = true;
        if (this.btnTogglePanel && this.sliderPanel) {
            this.btnTogglePanel.addEventListener('click', () => {
                panelVisible = !panelVisible;
                if (panelVisible) {
                    this.sliderPanel.style.display = 'block';
                    this.btnTogglePanel.innerHTML = "<i class='bx bx-hide'></i> Ocultar Panel";
                } else {
                    this.sliderPanel.style.display = 'none';
                    this.btnTogglePanel.innerHTML = "<i class='bx bx-show'></i> Mostrar Panel";
                }
            });
        }
    }

    // Animación de los contadores numéricos en el Hero
    initContadoresAnimados() {
        const counters = document.querySelectorAll('[data-counter]');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-counter');
            let count = 0;
            const increment = target / 30;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
}

// Inicialización global al montar el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.slushEngine = new SlushEngineSystem();
});