import mongoose, {Schema} from "mongoose";    

const orderSchema = new Schema({
    userId: {
        type:String,
        required:true
    },
    items: {
        type:Array,
        required:true
    },
    amount: {
        type:Number,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true,
        default:'Order placed'
    },
    paymentMethod: {
        type:String,
        required:true
    },
    payment: {
        type:Boolean,
        default:false,
        required:true
    },
    date: {
        type:Date,
        required:true
    }
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);

export default orderModel;