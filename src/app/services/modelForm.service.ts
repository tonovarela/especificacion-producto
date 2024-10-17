import { inject, Injectable } from "@angular/core";
import {  FormBuilder, FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })

export class FormFactoryService {

     fb = inject(FormBuilder);    
    cotizacionesForm: FormGroup = this.fb.group({        
        pliego: ['Pliego extra'],
        single: ['single'],
        corrugado_tacon: ['Corrugado'],
        adhesivo: ['adhesivo'],
        cinta: ['Cinta'],
    })
    customerForm: FormGroup = this.fb.group({
        descripcion: ['s'],
        etiqueta_cliente: ['cliente e'],
        etiqueta_producto: ['producto'],

        etiqueta_op: [0],

        etiqueta_orden_compra: [1],
        
        etiqueta_cantidad: ['cantidad'],
        etiqueta_fecha_corriente: [true],
        etiqueta_destino: ['destino'],
        etiqueta_logotipo: [true],
        etiquetaImagen:[[]],
        
        caja_tipo: ['tipo_caja'],
        caja_dimensiones: ['dimensiones'],
        caja_peso_bruto: ['peso_bruto'],
        caja_peso_maximo: ['peso_maximo'],
        caja_piezas_caja: ['piezas_caja'],
        caja_logotipo: [true],
        cajaImagen:[[]],

        tarima_tipo: ['tipo_tarima'],
        tarima_estima_maxima: ['estiba_maxima'],
        tarima_cajas_cama: ['cajas_cama'],
        tarima_cajas_portarima: ['cajas por tarima'],
        tarima_total: ['total_tarimas'],
        tarima_pieza_empacadas: ['piezas_empacadas'],

        esquineros: [true],
        fleje: [true],
        playo: [true],
        playo_base: ['playo base'],
        playo_centro: ['playo centro'],
        playo_arriba:[ 'playo arriba'],
        observaciones: ['observaciones'],
        tarimaImagen:[[]],


        lista_distribucion: ['lista_distribucion'],
        certificado_calidad: [true],
        carta_color: [false],
        carta_garantia: [true],
        factura: [false],
        remision: [true],
        orden_compra: [true],
        
    });
    
    planeacionForm= this.fb.group({
        disenio_estructural: ['diseño'],
        
        preprensa: ['preprensa'],
        metalizado: ['metalizado'],
        corte: ['corte'],
        impresion:'impresion',
        barniz_uv: ['uv'],
        traslape: ['traslape'],
        empalme: ['empalme'],
        suaje:  ['suaje'],
        pegue_caja:  ['pegue_caja'],
        pegue_ventana:  ['pegue_ventana'],
        acabados:  ['acabados'],
        maquilas:  ['maquilas'],

    });
    disenioEstructuralForm: FormGroup = this.fb.group({
        frente: ['f'],
        fondo: ['fondo'],
        altura: ['altura'],
        tamanio_extendido: [' tamaño extendido'],
        tamanio_final: ['tamanio final'],
        ayudaVisual: [[]],

    });
    prePrensaForm: FormGroup = this.fb.group({
        pruebaColor:[[]],        
        planosIndividuales: [[]],
        planoFormacion:[[]],
        marcarillaBarniz: [[]],
        mascarillaBaseBlanca: [[]],
        marcarillaPegado: [[]],
        marcarillaPegadoCinta: [[]],
        tinta1_1: ['tinta1'],
        tinta1_2: ['tinta2'],
        tinta1_3: ['tinta3'],
        tinta1_4: ['tinta4'],
        tinta1_5: ['tinta5'],
        tinta2_1: ['tinta6'],
        tinta2_2: ['tinta7'],
        tinta2_3: ['tinta8'],
        tinta2_4: ['tinta9'],
        tinta2_5: ['tinta10'], 
        barniz: [' Txt barniz'],       
        codigoBarras: [[]],
        
    });
   
    formGeneral: FormGroup = this.fb.group({
        cotizacion: this.cotizacionesForm,
        customer: this.customerForm,        
        disenioEstructural: this.disenioEstructuralForm,
        prePrensa: this.prePrensaForm,        
        planeacion: this.planeacionForm,        
    })
}

