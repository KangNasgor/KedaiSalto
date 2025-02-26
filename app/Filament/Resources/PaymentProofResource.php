<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Order;
use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Models\Payment_proof;
use Filament\Resources\Resource;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Filters\TrashedFilter;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\PaymentProofResource\Pages;
use App\Filament\Resources\PaymentProofResource\RelationManagers;

class PaymentProofResource extends Resource
{
    protected static ?string $model = Payment_proof::class;

    protected static ?string $navigationIcon = 'heroicon-o-credit-card';
    protected static ?string $activeNavigationIcon = 'heroicon-s-credit-card';
    protected static ?string $navigationGroup = 'Client';
    protected static ?int $navigationSort = 4;
    protected static ?string $navigationBadgeTooltip = 'Total payment proof';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('order.user.name')->label('User')->searchable(),
                Tables\Columns\TextColumn::make('order.id')->label('Order ID')->searchable(),
                Tables\Columns\ImageColumn::make('image')->label('Image'),
            ])
            ->filters([
                TrashedFilter::make(),
                Tables\Filters\SelectFilter::make('order_id')->label('Order ID')->options(
                    Payment_proof::with('order')->select('order_id')->get()->mapWithKeys(fn($proof) =>
                        [$proof->order->id => $proof->order->id]
                    )->toArray(),
                )->default(request('order_id')),
            ])
            ->actions([
                Tables\Actions\DeleteAction::make()->after(function (Payment_proof $record){}),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPaymentProofs::route('/'),
            'create' => Pages\CreatePaymentProof::route('/create'),
            'edit' => Pages\EditPaymentProof::route('/{record}/edit'),
        ];
    }
}
