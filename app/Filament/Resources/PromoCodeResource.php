<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PromoCodeResource\Pages;
use App\Filament\Resources\PromoCodeResource\RelationManagers;
use App\Models\Promo_code;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;

class PromoCodeResource extends Resource
{
    protected static ?string $model = Promo_code::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';
    protected static ?string $activeNavigationIcon = 'heroicon-s-tag';
    protected static ?string $navigationGroup = 'Data';
    protected static ?string $navigationLabel = 'Promo Codes';
    protected static ?string $navigationBadgeTooltip = 'Total promo code';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')->required()->label('Code'),
                TextInput::make('discount')->required()->label('Discount')->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')->label('Code'),
                TextColumn::make('discount')->label('Discount (percentage)'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPromoCodes::route('/'),
            'create' => Pages\CreatePromoCode::route('/create'),
            'edit' => Pages\EditPromoCode::route('/{record}/edit'),
        ];
    }
}
