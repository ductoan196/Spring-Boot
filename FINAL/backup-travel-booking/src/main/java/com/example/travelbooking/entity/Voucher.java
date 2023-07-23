package com.example.travelbooking.entity;

import com.example.travelbooking.statics.VoucherType;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vouchers")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Voucher extends BaseEntity{
    @Column(name = "voucher_code")
    private String voucherCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "voucher_type")
    private VoucherType voucherType;

    @Column(name = "discount_value")
    private Double discountValue;
}
