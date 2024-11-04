import { inject, Injectable } from "@angular/core";
import {  FormBuilder, FormGroup } from "@angular/forms";


@Injectable({
    providedIn: 'root'
  })

export class FormFactoryService {

     fb = inject(FormBuilder);    
    cotizacionesForm: FormGroup = this.fb.group({        
        pliego: [''],
        single: [''],
        corrugado_tacon: [''],
        adhesivo: [''],
        cinta: [''],
    })


    logisticaForm: FormGroup = this.fb.group({
        caja_tipo: [''],
        caja_dimensiones: [''],
        caja_peso_bruto: [''],
        caja_peso_maximo: [''],
        caja_piezas_caja: [''],
        caja_logotipo: [1],
        cajaImagen:[[]],

        tarima_tipo: [''],
        tarima_estima_maxima: [''],
        tarima_cajas_cama: [''],
        tarima_cajas_portarima: [''],
        tarima_total: [''],
        tarima_pieza_empacadas: [''],

        esquineros: [1],
        fleje: [1],
        playo: [1],
        playo_base: [''],
        playo_centro: [''],
        playo_arriba:[ ''],
        observaciones: [''],
        tarimaImagen:[[]],
    });
    customerForm: FormGroup = this.fb.group({
        descripcion: [''],
        codigo_cliente: [''],
        etiqueta_cliente: [''],
        etiqueta_producto: [''],

        etiqueta_op: [0],

        etiqueta_orden_compra: [1],
        
        etiqueta_cantidad: [''],
        etiqueta_fecha_corriente: [1],
        etiqueta_destino: [''],
        etiqueta_logotipo: [1],
        etiquetaImagen:[[]],
        
       


        lista_distribucion: [''],
        certificado_calidad: [1],
        carta_color: [1],
        carta_garantia: [1],
        factura: [1],
        remision: [1],
        orden_compra: [1],
        
    });
    
    planeacionForm= this.fb.group({
        disenio_estructural: [''],
        
        preprensa: [''],
        metalizado: [''],
        corte: [''],
        impresion:'',
        barniz_uv: [''],
        traslape: [''],
        empalme: [''],
        suaje:  [''],
        pegue_caja:  [''],
        pegue_ventana:  [''],
        acabados:  [''],
        maquilas:  [''],

    });
    disenioEstructuralForm: FormGroup = this.fb.group({        
        frente: [''],
        fondo: [''],
        altura: [''],
        tamanio_extendido: [''],
        tamanio_final: [''],
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
        tinta1_1: [''],
        tinta1_2: [''],
        tinta1_3: [''],
        tinta1_4: [''],
        tinta1_5: [''],
        tinta2_1: [''],
        tinta2_2: [''],
        tinta2_3: [''],
        tinta2_4: [''],
        tinta2_5: [''], 
        barniz: [''],       
        codigoBarras: [[]],
        
    });
   
    formGeneral: FormGroup = this.fb.group({
        cotizacion: this.cotizacionesForm,
        customer: this.customerForm,   
        logistica: this.logisticaForm,     
        disenioEstructural: this.disenioEstructuralForm,
        prePrensa: this.prePrensaForm,        
        planeacion: this.planeacionForm,        
    })

    

    
}

