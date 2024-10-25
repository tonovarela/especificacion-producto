import { FileModel } from "./file.interface";

export interface SolicitudModel {
    id_solicitud:string;
    customer?:any;
    disenioEstructural?:any;
    cotizacion?:any;
    planeacion?:any;
    prePrensa?:any;  
  }

export interface ResponseListadoSolicitud{
    solicitudes: Solicitud[];
}

export interface ResponseSolicitud {
    solicitud:          Solicitud;
    planeacion:         Planeacion;
    cotizacion:         Cotizacion;
    disenioEstructural: DisenioEstructural;
    customer:           Customer;
    prePrensa:          PrePrensa;
}

export interface Cotizacion {
    adhesivo:        string;
    cinta:           string;
    corrugado_tacon: string;
    pliego:          string;
    single:          string;
}

export interface Customer {
    caja_dimensiones:         string;
    caja_logotipo:            string;
    caja_peso_bruto:          string;
    caja_peso_maximo:         string;
    caja_piezas_caja:         string;
    caja_tipo:                string;
    carta_color:              string;
    carta_garantia:           string;
    certificado_calidad:      string;
    descripcion:              string;
    esquineros:               string;
    etiqueta_cantidad:        string;
    etiqueta_cliente:         string;
    etiqueta_destino:         string;
    etiqueta_fecha_corriente: string;
    etiqueta_logotipo:        string;
    etiqueta_op:              string;
    etiqueta_orden_compra:    string;
    etiqueta_producto:        string;
    factura:                  string;
    fleje:                    string;
    lista_distribucion:       string;
    observaciones:            string;
    orden_compra:             string;
    playo:                    string;
    playo_arriba:             string;
    playo_base:               string;
    playo_centro:             string;
    remision:                 string;
    tarima_cajas_cama:        string;
    tarima_cajas_portarima:   string;
    tarima_estima_maxima:     string;
    tarima_pieza_empacadas:   string;
    tarima_tipo:              string;
    tarima_total:             string;
    etiquetaImagen:           FileModel[];
    cajaImagen:               FileModel[];
    tarimaImagen:             FileModel[];
}

export interface DisenioEstructural {
    frente:            string;
    fondo:             string;
    altura:            string;
    tamanio_extendido: string;
    tamanio_final:     string;
    ayudaVisual:       FileModel[];
}



export interface Planeacion {
    acabados:            string;
    barniz_uv:           string;
    corte:               string;
    disenio_estructural: string;
    empalme:             string;
    impresion:           string;
    maquilas:            string;
    metalizado:          string;
    pegue_caja:          string;
    pegue_ventana:       string;
    preprensa:           string;
    suaje:               string;
    traslape:            string;
}

export interface PrePrensa {
    tinta1_1:              string;
    tinta1_2:              string;
    tinta1_3:              string;
    tinta1_4:              string;
    tinta1_5:              string;
    tinta2_1:              string;
    tinta2_2:              string;
    tinta2_3:              string;
    tinta2_4:              string;
    tinta2_5:              string;
    barniz:                string;
    codigoBarras:          FileModel[];
    planosIndividuales:    FileModel[];
    pruebaColor:           FileModel[];
    planoFormacion:        FileModel[];
    marcarillaBarniz:      FileModel[];
    mascarillaBaseBlanca:  FileModel[];
    marcarillaPegado:      FileModel[];
    marcarillaPegadoCinta: FileModel[];
}

export interface Solicitud {
    id_solicitud:   string;
    nombre:         string;
    producto?:       string;
    cliente?:        string;
    id_Oportunidad?: string;
    customer?:boolean;
    prePrensa?:boolean;
    cotizaciones?:boolean;
    disenioEstructural?:boolean;
    planeacion?:boolean;
    fecha_registro?:Date;
}
