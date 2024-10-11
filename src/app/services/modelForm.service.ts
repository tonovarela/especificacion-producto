import { inject, Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })

export class FormFactoryService {

     fb = inject(FormBuilder);    
    cotizacionesForm: FormGroup = this.fb.group({
        descripcion: ['vslrr'],
        pliego: ['Pliego extra'],
        single: ['single'],
        corrugado_tacon: ['Corrugado'],
        adhesivo: ['adhesivo'],
        cinta: ['Cinta'],
    })
    customerForm: FormGroup = this.fb.group({
        descripcion: ['s', Validators.required],
        etiqueta_cliente: ['cliente'],
        etiqueta_producto: ['producto'],
        etiqueta_op: ['op'],
        etiqueta_orden_compra: ['orden_compra'],
        etiqueta_cantidad: ['cantidad'],
        etiqueta_fecha_corriente: ['fecha_corriente'],
        etiqueta_destino: ['destino'],
        etiqueta_logotipo: ['logotipo'],
        
        caja_tipo: ['tipo_caja'],
        caja_dimensiones: ['dimensiones'],
        caja_peso_bruto: ['peso_bruto'],
        caja_peso_maximo: ['peso_maximo'],
        caja_piezas_caja: ['piezas_caja'],
        caja_logotipo: ['logotipo'],

        tarima_tipo: ['tipo_tarima'],
        tarima_estima_maxima: ['estiba_maxima'],
        tarima_cajas_cama: ['cajas_cama'],
        tarima_cajas_portarima: ['cajas por tarima'],
        tarima_total: ['total_tarimas'],
        tarima_pieza_empacadas: ['piezas_empacadas'],

        esquineros: ['esquineros'],
        fleje: ['fleje'],
        playo: ['playo'],
        playo_base: ['playo base'],
        playo_centro: ['playo centro'],
        playo_arriba:[ 'playo arriba'],
        observaciones: ['observaciones'],
        
    });
    ventasForm: FormGroup = this.fb.group({
        lista_distribucion: [''],
        certificado_calidad: [''],
        cartal_color: [''],
        carta_garantia: [''],
        factura: [''],
        remision: [''],
        orden_compra: [''],
    } );  
    planeacionForm= this.fb.group({
        diseñio_estructural: [''],
        pre_prensa: [''],
        metalizado: [''],
        corte: [''],
        impresion: [{value:''}],
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
        frente: ['f'],
        fondo: ['fondo'],
        altura: ['altura'],
        tamanio_extendido: [' tamaño extendido'],
        tamanio_final: ['tamanio final'],
        ayudaVisual: [''],

    });
    prePrensaForm: FormGroup = this.fb.group({
        pruebaColor:this.fb.array([]),        
        planosIndividuales: this.fb.array([]),
        planoFormacion:this.fb.array([]),
        marcarillaBarniz: this.fb.array([]),
        mascarillaBaseBlanca: this.fb.array([]),
        marcarillaPegado: this.fb.array([]),
        marcarillaPegadoCinta: this.fb.array([]),
        tinta1_1: [{value:'tinta1',disabled:true}],
        tinta1_2: [{value:'tinta2',disabled:true}],
        tinta1_3: ['tinta3'],
        tinta1_4: ['tinta4'],
        tinta1_5: ['tinta5'],
        tinta2_1: ['tinta6'],
        tinta2_2: ['tinta7'],
        tinta2_3: ['tinta8'],
        tinta2_4: ['tinta9'],
        tinta2_5: ['tinta10'], 
        barniz: [' Txt barniz'],       
        codigoBarras: ['codigo de barras'],
        
    });
   
    formGeneral: FormGroup = this.fb.group({
        cotizaciones: this.cotizacionesForm,
        customer: this.customerForm,
        disenioEstructural: this.disenioEstructuralForm,
        prePrensa: this.prePrensaForm,        
        planeacion: this.planeacionForm,
        ventas: this.ventasForm,
    })
}

