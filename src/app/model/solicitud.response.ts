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
    caja_dimensiones:         null;
    caja_logotipo:            string;
    caja_peso_bruto:          null;
    caja_peso_maximo:         null;
    caja_piezas_caja:         null;
    caja_tipo:                null;
    carta_color:              string;
    carta_garantia:           string;
    certificado_calidad:      string;
    descripcion:              string;
    esquineros:               string;
    etiqueta_cantidad:        null;
    etiqueta_cliente:         null;
    etiqueta_destino:         null;
    etiqueta_fecha_corriente: string;
    etiqueta_logotipo:        string;
    etiqueta_op:              string;
    etiqueta_orden_compra:    string;
    etiqueta_producto:        null;
    factura:                  string;
    fleje:                    string;
    lista_distribucion:       null;
    observaciones:            null;
    orden_compra:             string;
    playo:                    string;
    playo_arriba:             null;
    playo_base:               null;
    playo_centro:             null;
    remision:                 string;
    tarima_cajas_cama:        null;
    tarima_cajas_portarima:   null;
    tarima_estima_maxima:     null;
    tarima_pieza_empacadas:   null;
    tarima_tipo:              null;
    tarima_total:             null;
    etiquetaImagen:           any[];
    cajaImagen:               any[];
    tarimaImagen:             any[];
}

export interface DisenioEstructural {
    frente:            string;
    fondo:             string;
    altura:            string;
    tamanio_extendido: string;
    tamanio_final:     string;
    ayudaVisual:       AyudaVisual[];
}

export interface AyudaVisual {
    id_documento: string;
    nombre:       string;
    documento:    string;
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
    codigoBarras:          AyudaVisual[];
    planosIndividuales:    any[];
    pruebaColor:           any[];
    planoFormacion:        any[];
    marcarillaBarniz:      any[];
    mascarillaBaseBlanca:  any[];
    marcarillaPegado:      any[];
    marcarillaPegadoCinta: any[];
}

export interface Solicitud {
    id_solicitud:   string;
    producto:       string;
    cliente:        string;
    id_Oportunidad: string;
}
