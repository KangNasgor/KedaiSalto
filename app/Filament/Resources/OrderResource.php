<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';
    protected static ?string $activeNavigationIcon = 'heroicon-s-briefcase';
    protected static ?string $navigationGroup = 'Client';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationBadgeTooltip = 'Total order';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('user_id')->required()->label('User')->options([
                    User::all()->pluck('name', 'id')->toArray()
                ]),
                TextInput::make('price')->required()->label('Price')->numeric()->prefix('Rp'),
                Select::make('confirmed')->required()->label('Confirmed')->options([
                    'True' => 'True',
                    'False' => 'False',
                ]),
                Select::make('paid')->required()->label('Paid')->options([
                    'True' => 'True',
                    'False' => 'False',
                ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('ID')->sortable(),
                Tables\Columns\TextColumn::make('user.name')->label('User')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('price')->label('Price')->searchable(),
                Tables\Columns\BadgeColumn::make('confirmed')->label('Confirmed')->searchable()->colors([
                    'primary' => 'True',
                    'danger' => 'False',
                ]),
                Tables\Columns\BadgeColumn::make('paid')->label('Paid')->searchable()->colors([
                    'primary' => 'True',
                    'danger' => 'False',
                ]),
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    public static function getNavigationBadgeColor(): ?string
    {
        return 'info';
    }
}
